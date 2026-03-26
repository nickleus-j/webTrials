import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-jigsaw-puzzle',
  templateUrl: './jigsaw-puzzle.component.html',
  styleUrls: ['./jigsaw-puzzle.component.css']
})
export class JigsawPuzzleComponent implements AfterViewInit {
  @ViewChild('puzzleCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;
  private gridCols = 4;
  private gridRows = 4;
  private pieceWidth = 0;
  private pieceHeight = 0;
  private pieces: PuzzlePiece[] = [];

  ngAfterViewInit(): void {
    this.initializeCanvas();
    this.generatePuzzle();
  }

  private initializeCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = 800;
    canvas.height = 600;
    const context = canvas.getContext('2d');
    if (!context) throw new Error('Canvas context not available');
    this.ctx = context;

    this.pieceWidth = canvas.width / this.gridCols;
    this.pieceHeight = canvas.height / this.gridRows;
  }

  private generatePuzzle(): void {
    // Clear canvas
    this.ctx.fillStyle = '#f0f0f0';
    this.ctx.fillRect(0, 0, this.canvasRef.nativeElement.width, this.canvasRef.nativeElement.height);

    // Generate puzzle pieces
    this.pieces = [];
    for (let row = 0; row < this.gridRows; row++) {
      for (let col = 0; col < this.gridCols; col++) {
        const piece: PuzzlePiece = {
          x: col * this.pieceWidth,
          y: row * this.pieceHeight,
          width: this.pieceWidth,
          height: this.pieceHeight,
          offsetX: (Math.random() - 0.5) * 50,
          offsetY: (Math.random() - 0.5) * 50,
          rotation: Math.random() * 360,
          row,
          col,
          isPlaced: false
        };
        this.pieces.push(piece);
      }
    }

    // Shuffle pieces
    this.pieces.sort(() => Math.random() - 0.5);

    // Draw puzzle
    this.drawPuzzle();
  }

  private drawPuzzle(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx.fillStyle = '#ffffff';
    this.ctx.fillRect(0, 0, canvas.width, canvas.height);

    this.pieces.forEach((piece, index) => {
      this.drawPuzzlePiece(piece, index);
    });
  }

  private drawPuzzlePiece(piece: PuzzlePiece, index: number): void {
    this.ctx.save();

    // Apply random position offset
    const displayX = piece.x + piece.offsetX;
    const displayY = piece.y + piece.offsetY;

    this.ctx.translate(displayX + piece.width / 2, displayY + piece.height / 2);
    this.ctx.rotate((piece.rotation * Math.PI) / 180);
    this.ctx.translate(-(piece.width / 2), -(piece.height / 2));

    // Draw piece background with gradient
    const gradient = this.ctx.createLinearGradient(0, 0, piece.width, piece.height);
    gradient.addColorStop(0, `hsl(${(index * 60) % 360}, 70%, 60%)`);
    gradient.addColorStop(1, `hsl(${(index * 60) % 360}, 70%, 40%)`);
    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(0, 0, piece.width, piece.height);

    // Draw puzzle piece border with tabs and blanks
    this.drawPieceShape(piece);

    // Draw piece border
    this.ctx.strokeStyle = '#333';
    this.ctx.lineWidth = 2;
    this.ctx.stroke();

    // Add subtle shadow
    this.ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
    this.ctx.shadowBlur = 5;
    this.ctx.shadowOffsetX = 2;
    this.ctx.shadowOffsetY = 2;

    this.ctx.restore();
  }

  private drawPieceShape(piece: PuzzlePiece): void {
    const tabSize = 15;
    const path = new Path2D();

    // Start from top-left
    path.moveTo(0, 0);

    // Top edge
    this.addEdgeWithTab(path, 0, 0, piece.width, 0, tabSize, 'horizontal');

    // Right edge
    this.addEdgeWithTab(path, piece.width, 0, piece.width, piece.height, tabSize, 'vertical');

    // Bottom edge
    this.addEdgeWithTab(path, piece.width, piece.height, 0, piece.height, tabSize, 'horizontal');

    // Left edge
    this.addEdgeWithTab(path, 0, piece.height, 0, 0, tabSize, 'vertical');

    path.closePath();
    this.ctx.fill(path);
    this.ctx.stroke(path);
  }

  private addEdgeWithTab(
    path: Path2D,
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    tabSize: number,
    direction: 'horizontal' | 'vertical'
  ): void {
    const hasTab = Math.random() > 0.5;
    const midpoint = direction === 'horizontal' ? (x1 + x2) / 2 : (y1 + y2) / 2;

    if (direction === 'horizontal') {
      path.lineTo(midpoint - tabSize / 2, y1);
      if (hasTab) {
        path.lineTo(midpoint - tabSize / 2, y1 - tabSize);
        path.lineTo(midpoint + tabSize / 2, y1 - tabSize);
      } else {
        path.lineTo(midpoint - tabSize / 2, y1 + tabSize);
        path.lineTo(midpoint + tabSize / 2, y1 + tabSize);
      }
      path.lineTo(midpoint + tabSize / 2, y1);
      path.lineTo(x2, y2);
    } else {
      path.lineTo(x1, midpoint - tabSize / 2);
      if (hasTab) {
        path.lineTo(x1 - tabSize, midpoint - tabSize / 2);
        path.lineTo(x1 - tabSize, midpoint + tabSize / 2);
      } else {
        path.lineTo(x1 + tabSize, midpoint - tabSize / 2);
        path.lineTo(x1 + tabSize, midpoint + tabSize / 2);
      }
      path.lineTo(x1, midpoint + tabSize / 2);
      path.lineTo(x2, y2);
    }
  }

  regeneratePuzzle(): void {
    this.generatePuzzle();
  }
}

// Interface for puzzle piece data
interface PuzzlePiece {
  x: number;
  y: number;
  width: number;
  height: number;
  offsetX: number;
  offsetY: number;
  rotation: number;
  row: number;
  col: number;
  isPlaced: boolean;
}
