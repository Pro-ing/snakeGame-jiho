document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('settingsModal');
    const btn = document.getElementById('settingsButton');
    const span = document.getElementsByClassName('close')[0];
    const applyBtn = document.getElementById('applyButton');
    
    const playerOptions = document.getElementById('playerOptions');
    const playerRadios = document.getElementsByName('players');
    const player1Keys = document.getElementById('1PKeys');
    const player2Options = document.getElementById('2POptions');
    const autoButton = document.getElementById('autoButton');
    const playerButton = document.getElementById('playerButton');
    const player2Keys = document.getElementById('2PKeys');

    btn.onclick = function() {
        modal.style.display = 'block';
    }

    span.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }

    applyBtn.onclick = function() {
        // 지렁이 속도 설정 적용
        let speed = document.querySelector('input[name="speed"]:checked').value;
        console.log('선택된 지렁이 속도:', speed);

        // 플레이어 설정 적용
        let players = document.querySelector('input[name="players"]:checked').value;
        console.log('선택된 플레이어:', players);

        // 1P 키 설정 적용
        let keys1P = {
            up: document.getElementById('1P-up').value,
            down: document.getElementById('1P-down').value,
            left: document.getElementById('1P-left').value,
            right: document.getElementById('1P-right').value
        };
        console.log('1P 키 설정:', keys1P);

        // 2P 키 설정 적용
        let keys2P = null;
        if (players === '2P') {
            if (document.getElementById('playerButton').classList.contains('active')) {
                keys2P = {
                    up: document.getElementById('2P-up').value,
                    down: document.getElementById('2P-down').value,
                    left: document.getElementById('2P-left').value,
                    right: document.getElementById('2P-right').value
                };
            } else {
                // Auto 선택 시 1P 키만 설정 가능
                keys2P = {
                    up: '',  // 비어있음
                    down: '',
                    left: '',
                    right: ''
                };
            }
            console.log('2P 키 설정:', keys2P);
        }

        // 맵 크기 설정 적용
        let mapSize = document.querySelector('input[name="mapSize"]:checked').value;
        console.log('선택된 맵 크기:', mapSize);

        // 여기서 설정을 실제로 적용하거나, 필요한 처리를 수행할 수 있음

        // 모달 닫기
        modal.style.display = 'none';
    }

    // 플레이어 설정 변경 시 이벤트 처리
    playerRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.value === '2P') {
                player2Options.style.display = 'block';
            } else {
                player2Options.style.display = 'none';
                player2Keys.style.display = 'none';
            }
        });
    });

    // 2P 옵션 버튼 처리
    autoButton.onclick = function() {
        player2Keys.style.display = 'none';
    }

    playerButton.onclick = function() {
        player2Keys.style.display = 'block';
    }
});
