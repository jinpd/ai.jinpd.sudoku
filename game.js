// game.js 파일 - 이 내용이 정확히 파일 전체에 있어야 합니다.

function initializeGame() {
    // HTML에서 'game-container' 요소를 찾습니다.
    const container = document.getElementById('game-container');
    
    if (container) {
        // 이 메시지가 화면의 'game-container' 영역에 나타나야 합니다.
        container.innerHTML = "<h2>TEST SUCCESS! 게임이 정상 실행되었습니다.</h2>";
    }
}

// 브라우저가 준비되면 initializeGame 함수를 실행합니다.
document.addEventListener('DOMContentLoaded', initializeGame);