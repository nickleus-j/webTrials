import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'tic-tac-toe',
  imports: [CommonModule],
  templateUrl: './tictactoe.html',
  styleUrls: ['./tictactoe.css']
})
export class TicTacToeComponent {
  board: (string | null)[] = Array(9).fill(null);
  isXNext: boolean = true;
  winner: string | null = null;
  gameOver: boolean = false;

  get currentPlayer(): string {
    return this.isXNext ? 'X' : 'O';
  }

  get statusMessage(): string {
    if (this.winner) {
      return `Player ${this.winner} wins! 🎉`;
    }
    if (this.gameOver) {
      return "It's a draw!";
    }
    return `Current Player: ${this.currentPlayer}`;
  }

  makeMove(index: number): void {
    if (this.board[index] || this.winner || this.gameOver) {
      return;
    }

    this.board[index] = this.currentPlayer;
    this.checkGameStatus();
    this.isXNext = !this.isXNext;
  }

  private checkGameStatus(): void {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (const combo of winningCombinations) {
      const [a, b, c] = combo;
      if (
        this.board[a] &&
        this.board[a] === this.board[b] &&
        this.board[a] === this.board[c]
      ) {
        this.winner = this.board[a];
        return;
      }
    }

    this.gameOver = this.board.every(cell => cell !== null);
  }

  resetGame(): void {
    this.board = Array(9).fill(null);
    this.isXNext = true;
    this.winner = null;
    this.gameOver = false;
  }
}
