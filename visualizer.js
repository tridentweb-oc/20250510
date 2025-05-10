export function drawCircleWave(
    ctx,
    canvas,
    dataArray,
    bufferLength,
    circleColor
) {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const baseRadius = 100;
    const waveScale = 2.0;
    ctx.beginPath();
    for (let i = 0; i < bufferLength; i++) {
        const angle = (i / bufferLength) * Math.PI * 2;
        const value = dataArray[i] * waveScale;
        const radius = baseRadius + value;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }
    ctx.closePath();
    ctx.strokeStyle = circleColor;
    ctx.lineWidth = 2;
    ctx.stroke();
}