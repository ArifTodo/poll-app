import React from "react";
import Board from "./project1/lesson2";

function calculateWinner(squares){
      const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [2, 4, 6],
            [0, 4, 8]
      ]
      for(let i=0; i<lines.length; i++){
            const [a, b, c] = lines[i]
            if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
                  return squares[a]
            }
      }
      return null;
}
class Project extends React.Component{
      state = {
            history: [{squares: Array(9).fill(null)}],
            stepNumber:0,
            xIsNext: true
      }
      handleClick = i =>{
            const history = this.state.history.slice(0, this.state.stepNumber + 1)
            const current = history[history.length - 1]
            const squares = current.squares.slice()

            if(calculateWinner(squares) || squares[i]){
                  return 
            }
            squares[i] = this.state.xIsNext ? 'x' : 'y'
            this.setState({
                  history: history.concat([{squares}]),
                  stepNumber: history.length,
                  xIsNext: !this.state.xIsNext
            })
      };
      jumpTo = step =>{
            this.setState({
                  stepNumber: step,
                  xIsNext: step % 2 === 0
            })
      }
      render(){
            const history = this.state.history
            const current = history[this.state.stepNumber]
            const winner = calculateWinner(current.squares)

            const move = history.map((_,move)=>{
                  const desc = move ? 'go to ' + move: 'go to game start'
                  return(
                        <li key={move}>
                              <button onClick={() => this.jumpTo(move)}>{desc}</button>
                        </li>
                  )
            });
            let status = ''
            if(winner){
                  status = 'winner: ' + winner
            }else{
                  status = 'next player ' + (this.state.xIsNext ? 'x' : 'y')
            };
            return(
                  <div className= 'game'>
                       <div className='game-board'>
                             <Board onClick={this.handleClick} squares={current.squares} />
                       </div>
                       <div className='game-info'>
                             <div>{status}</div>
                             <ol>{move}</ol>
                       </div>
                  </div>
            )
      }
};
export default Project;