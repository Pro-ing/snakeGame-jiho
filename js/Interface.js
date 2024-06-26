class IEarthWorm {
    constructor(width, height) {
        this.width = width;                 // 맵 너비값
        this.height = height;              // 맵 높이값
        this.headDirection = 'RIGHT';  // 초기 방향
        this.worm = {x:10,y:10};          //지렁이 좌표
        this.apple = '';                     //사과 좌표
        this.isGameOver = false;       // 종료 여부
    }

    gameStart(){
        //게임을 실행하는 함수
    }
  
    setHeadDirection(direction){
        //지렁이의 진행 방향 설정
    }
    
    //라이브러리에서 사용
    createApple() {
        //사과를 좌표를 랜덤으로 생성하는 함수
    }

    updateWormStatus() {
        //지렁이의 상태를 지속적으로 갱신하기 위한 함수
        // 1. 키보드 클릭에 따른 방향 갱신
        // 2. 음식 섭취 여부에 따른 길이 갱신
        // 3. 지렁이 이동 좌표 갱신
        // 4. 지렁이 생사여부 갱신
    } 
  
    getWorm(){
        //화면에 출력할 지렁이 좌표
        return this.direction;
    }

    getApple(){
        //화면에 출력할 음식 좌표
        return this.apple;
    }

    getIsGameOver(){
         //화면에 출력할 게임 종료 여부
         return this.isGameOver;
    }

    getHeadDirection(){
        //화면에 출력할 진행 방향 정보
        return this.headDirection;
    }
}

export {IEarthWorm};