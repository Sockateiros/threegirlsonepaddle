var canvasW = 800;
var canvasH = 400;

var paddles = 	[	{x: 0, y: 100, w: 20, h: 50},
					{x: canvasW - 20, y: 100, w: 20, h: 50}
				];

var balls = [	{	x: 100, y: 100, nextX: 250, nextY: 200, vx: 100, vy: 0, nextVx: 100, nextVy: 0, w: 20,
					dbg: {x: 100, y: 100, nextX: 250, nextY: 200, vx: 100, vy: 0, nextVx: 100, nextVy: 0, w: 20}	
				},
				{	x: 200, y: 120, nextX: 250, nextY: 200, vx: 120, vy: 50, nextVx: 100, nextVy: 0, w: 20,
					dbg: {x: 200, y: 120, nextX: 250, nextY: 200, vx: 120, vy: 50, nextVx: 100, nextVy: 0, w: 20}	
				}
			];
