import { debounce } from '$lib/services/debounce.service';

export interface RadarChartOptions {
  canvas: HTMLCanvasElement;
  labels: (string | HTMLImageElement)[];
  precision?: number;
  maxValue?: number;
  structureColor?: string;
  webColor?: string;
  datasets: RadarChartDataset[];
}

export interface RadarChartDataset {
  label: string;
  fillColor: string;
  strokeColor: string;
  pointFillColor: string;
  pointStrokeColor: string;
  data: number[];
}

export class RadarChart {
  private datasets: RadarChartDataset[] = [];
  private labels = new Array<string | HTMLImageElement>();
  private precision = 5;
  private maxValue = 100;
  private chartSize = 0;
  private labelSize = 0;
  private structureColor = 'rgba(0,0,0,1)';
  private webColor = 'rgba(0,0,0,1)';
  private canvasRef: HTMLCanvasElement | null = null;
  private canvasContextRef: CanvasRenderingContext2D | null = null;

  constructor(options: RadarChartOptions) {
    this.setup(options);
    this.loadImage();

    window.onresize = debounce(() => {
      this.resize();
    }, 100);
  }

  loadImage(): void {
    let counter = 0;
    let counterLoad = 0;

    const onReady = () => {
      this.render();
      this.resize();
    };

    const checkLoading = () => {
      if (counter === counterLoad) {
        onReady();
      }
    };

    this.labels.forEach((l) => {
      if (typeof l != 'string') {
        counter++;
        if (l.complete && l.naturalWidth > 0) {
          counterLoad++;
          return;
        }
        l.onload = () => {
          counterLoad++;
          checkLoading();
        };
      }
    });

    checkLoading();
  }

  setup(options: RadarChartOptions): void {
    this.canvasRef = options.canvas;
    this.canvasContextRef = this.canvasRef.getContext('2d') || new CanvasRenderingContext2D();

    options.datasets.forEach((set) => {
      this.addDataSet(set);
    });

    this.labels = options.labels || this.labels;
    this.precision = options.precision || this.precision;
    this.maxValue = options.maxValue || this.maxValue;
    this.webColor = options.webColor || this.webColor;
    this.structureColor = options.structureColor || this.structureColor;
  }

  resize(w?: number, h?: number): void {
    if (!this.canvasRef) {
      return;
    }

    this.canvasRef.width = w || (this.canvasRef.parentElement?.offsetWidth || 0) * (90 / 100);
    this.canvasRef.height = h || (this.canvasRef.parentElement?.offsetHeight || 0) * (90 / 100);
    const smallerSide =
      this.canvasRef.width < this.canvasRef.height ? this.canvasRef.width : this.canvasRef.height;
    this.chartSize = smallerSide * 0.75;
    this.labelSize = (smallerSide - this.chartSize) * 0.65;

    this.render();
  }

  addDataSet(dataSet: RadarChartDataset): void {
    if (!dataSet.data) {
      console.warn('dataSet empty');
      return;
    }

    const newDataset = {
      label: dataSet.label || 'newDataset',
      fillColor: dataSet.fillColor || 'rgba(220,220,220,0.5)',
      strokeColor: dataSet.strokeColor || 'rgba(220,220,220,1)',
      pointFillColor: dataSet.pointFillColor || 'rgba(220,220,220,1)',
      pointStrokeColor: dataSet.pointStrokeColor || '#fff',
      data: dataSet.data,
    };
    this.datasets.push(newDataset);
  }

  drawStructure(): void {
    if (!this.canvasContextRef) {
      return;
    }
    this.canvasContextRef.save();
    this.canvasContextRef.lineWidth = 0.5;
    this.canvasContextRef.beginPath();
    for (let i = 0; i < this.labels.length; i++) {
      this.canvasContextRef.moveTo(0, 0);
      this.canvasContextRef.lineTo(this.chartSize / 2, 0);
      this.canvasContextRef.rotate((Math.PI / 180) * (360 / this.labels.length));
    }
    this.canvasContextRef.closePath();
    this.strokeAndFill(this.structureColor);
    this.canvasContextRef.restore();
  }

  drawWeb(): void {
    if (!this.canvasContextRef) {
      return;
    }
    this.canvasContextRef.save();
    this.canvasContextRef.lineWidth = 0.2;
    const step = this.chartSize / 2 / this.precision;
    for (let i = 1; i < this.precision + 1; i++) {
      this.canvasContextRef.beginPath();
      const curStep = step * i;
      const angle = Math.PI / (this.labels.length / 2);
      for (let j = 0; j < this.labels.length; j++) {
        this.canvasContextRef.lineTo(Math.cos(angle * j) * curStep, -Math.sin(angle * j) * curStep);
      }
      this.canvasContextRef.lineTo(curStep, 0);
      this.canvasContextRef.closePath();
      this.strokeAndFill(this.webColor);
    }
    this.canvasContextRef.restore();
  }

  drawRadar(): void {
    this.drawStructure();
    this.drawWeb();
  }

  drawSkillLabel(dataset: RadarChartDataset): void {
    const angle = Math.PI / (dataset.data.length / 2);
    this.labels.forEach((label, i) => {
      if (!this.canvasContextRef) {
        return;
      }
      const height = (this.chartSize + this.labelSize) * 0.5;
      const size = this.labelSize * 0.5;
      this.canvasContextRef.save();
      this.canvasContextRef.translate(
        Math.cos(angle * i) * height,
        -(Math.sin(angle * i) * height)
      );
      this.canvasContextRef.rotate(Math.PI / 2);

      if (typeof label === 'string') {
        this.canvasContextRef.font = `${size / 2}px Arial`;
        this.canvasContextRef.fillText(
          label,
          -this.canvasContextRef.measureText(label).width / 2,
          0
        );
      } else {
        label.width = label.height = size;
        this.canvasContextRef.drawImage(label, -(label.width / 2), -(label.height / 2), size, size);
      }
      this.canvasContextRef.restore();
    });
  }

  drawSkillGraph(dataset: RadarChartDataset): void {
    if (!this.canvasContextRef) {
      return;
    }
    const angle = Math.PI / (dataset.data.length / 2);
    let height = ((this.chartSize / 2) * dataset.data[0]) / this.maxValue;
    this.canvasContextRef.save();
    this.canvasContextRef.lineWidth = 1;
    this.canvasContextRef.beginPath();
    [...dataset.data, dataset.data[0]].forEach((set, i) => {
      height = ((this.chartSize / 2) * set) / this.maxValue;
      this.canvasContextRef?.lineTo(Math.cos(angle * i) * height, -Math.sin(angle * i) * height);
    });
    this.canvasContextRef.lineTo(height, 0);
    this.canvasContextRef.closePath();
    this.strokeAndFill(dataset.strokeColor, dataset.fillColor);
    this.canvasContextRef.restore();
  }

  drawSkillPoint(dataset: RadarChartDataset): void {
    if (!this.canvasRef) {
      return;
    }
    const angle = Math.PI / (dataset.data.length / 2);
    for (let i = 0; i < dataset.data.length; i++) {
      const height = ((this.chartSize / 2) * dataset.data[i]) / this.maxValue;
      this.drawPoint(
        Math.cos(angle * i) * height,
        -Math.sin(angle * i) * height,
        this.canvasRef.height / 150
      );
      this.strokeAndFill(dataset.pointStrokeColor, dataset.pointFillColor);
    }
  }

  drawDataSet(dataset: RadarChartDataset): void {
    this.drawSkillGraph(dataset);
    this.drawSkillPoint(dataset);
    this.drawSkillLabel(dataset);
  }

  drawPoint(x: number, y: number, w: number): void {
    if (!this.canvasContextRef) {
      return;
    }
    this.canvasContextRef.beginPath();
    this.canvasContextRef.arc(x, y, w, 0, 2 * Math.PI, true);
    this.canvasContextRef.closePath();
  }

  strokeAndFill(strokeColor?: string, fillColor?: string): void {
    if (!this.canvasContextRef) {
      return;
    }
    if (strokeColor) {
      this.canvasContextRef.strokeStyle = strokeColor;
      this.canvasContextRef.stroke();
    }
    if (fillColor) {
      this.canvasContextRef.fillStyle = fillColor;
      this.canvasContextRef.fill();
    }
  }

  render(): void {
    if (!this.canvasContextRef || !this.canvasRef) {
      return;
    }
    this.canvasContextRef.save();
    this.canvasContextRef.translate(this.canvasRef.width / 2, this.canvasRef.height / 2);
    this.canvasContextRef.rotate(-Math.PI / 2);
    this.drawRadar();
    for (let i = 0; i < this.datasets.length; i++) {
      this.drawDataSet(this.datasets[i]);
    }
    this.canvasContextRef.restore();
  }
}
