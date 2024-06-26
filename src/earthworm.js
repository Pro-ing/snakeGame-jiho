    class IEarthWorm {
        constructor(width, height) {
            this.width = width;                 // 맵 너비값
            this.height = height;              // 맵 높이값
            this.headDirection = '';          // 초기 방향은 빈 문자열로 설정
            this.worm = []; // 지렁이 좌표 (시작할 때 비어 있음)
            this.apple = this.createApple();     // 사과 좌표
            this.isGameOver = false;       // 종료 여부
            this.gameInterval = null;      // 게임 인터벌
            this.score = 0;
        }
    
        resetGame() {
            this.headDirection = this.getRandomDirection();
            const centerX = Math.floor(this.width / 2);
            const centerY = Math.floor(this.height / 2);
            this.worm = [{x: centerX, y: centerY}, {x: centerX - 1, y: centerY}, {x: centerX - 2, y: centerY}, {x: centerX - 3, y: centerY}];
            this.apple = this.createApple();
            this.isGameOver = false;
            //this.score = getScore();
        }

        // getScore() {
        //     this.score = 0;
        //     let startTime = new Date().getTime();
        //     let currentTime = new Date().getTime();
        //     let scoreTime = currentTime - startTime;
        //     let score = Math.floor(scoreTime / 1000);
        // }
    
        gameStart() {
            this.resetGame();
            document.addEventListener('keydown', this.handleKeydown.bind(this));
            
            if (this.gameInterval) {
                clearInterval(this.gameInterval);
            }
            
            this.gameInterval = setInterval(() => {
                if (!this.headDirection) {
                    this.headDirection = this.getRandomDirection();
                }
                this.updateWormStatus();
                this.draw();
            }, 100); // 0.1초마다 이동
        }

        getRandomDirection() {
            const directions = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
            return directions[Math.floor(Math.random() * directions.length)];
        }
    
        handleKeydown(event) {
            if (event.key.startsWith('Arrow')) {
                this.headDirection = event.key;
            }
        }
    
        gameStop() {
            if (this.isGameOver) return;
            clearInterval(this.gameInterval);
            this.isGameOver = true;
            alert("Game Over");
        }
      
        setHeadDirection(direction) {
            const oppositeDirections = {
                'ArrowUp': 'ArrowDown',
                'ArrowDown': 'ArrowUp',
                'ArrowLeft': 'ArrowRight',
                'ArrowRight': 'ArrowLeft'
            };
            if (direction.startsWith('Arrow') && direction !== oppositeDirections[this.headDirection]) {
                this.headDirection = direction;
            }
        }
        
        createApple() {
            return {
                x: Math.floor(Math.random() * this.width),
                y: Math.floor(Math.random() * this.height)
            };
        }
    
        updateWormStatus() {
            const head = { ...this.worm[0] };
            let nextDirection = this.headDirection; // 다음 이동할 방향
            switch (this.headDirection) {
                case 'ArrowUp':
                    head.y -= 1;
                    break;
                case 'ArrowDown':
                    head.y += 1;
                    break;
                case 'ArrowLeft':
                    head.x -= 1;
                    break;
                case 'ArrowRight':
                    head.x += 1;
                    break;
            }
    
            // 벽 충돌 확인
            if (head.x < 0 || head.x >= this.width || head.y < 0 || head.y >= this.height) {
                this.gameStop();
                return;
            }
    
            // 자기 자신과 충돌 확인
            for (let part of this.worm) {
                if (part.x === head.x && part.y === head.y) {
                    this.gameStop();
                    return;
                }
            }
    
            this.worm.unshift(head);
    
            // 사과를 먹으면 사과 새로 생성
            if (head.x === this.apple.x && head.y === this.apple.y) {
                this.apple = this.createApple();
            } else {
                this.worm.pop();
            }
    
            // 키 입력이 없는 경우, 현재 방향을 유지
            if (!nextDirection) {
                nextDirection = this.headDirection;
            }
    
            // 방향 변경
            this.headDirection = nextDirection;
        } 
      
        getWorm() {
            return this.worm;
        }
    
        getApple() {
            return this.apple;
        }
    
        getIsGameOver() {
            return this.isGameOver;
        }
    
        getHeadDirection() {
            return this.headDirection;
        }
    
        draw() {
            const canvas = document.getElementById('gameCanvas');
            const context = canvas.getContext('2d');
    
            context.clearRect(0, 0, this.width * 10, this.height * 10);
    
            context.fillStyle = 'green';
            for (let part of this.worm) {
                context.fillRect(part.x * 10, part.y * 10, 10, 10);
            }
    
            context.fillStyle = 'red';
            context.fillRect(this.apple.x * 10, this.apple.y * 10, 10, 10);
        }
    }
    
    export { IEarthWorm };
    