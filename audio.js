const bgm = document.getElementById('bgm');
let hasPlayed = false;

// 初始化BGM
function initBGM() {
    bgm.volume = 0.5; // 音量50%，可调0-1
    bgm.preload = 'auto';
}

// 播放BGM（只会执行一次）
function playBGM() {
    if (hasPlayed) return;
    hasPlayed = true;
    bgm.play().catch(err => console.error('BGM加载失败，检查文件名大小写:', err));
}

// 暴露到全局，供index.html调用
window.initBGM = initBGM;
window.playBGM = playBGM;
