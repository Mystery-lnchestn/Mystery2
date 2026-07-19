// audio.js - 仅负责BGM播放，无其他冗余逻辑
const bgm = document.getElementById('bgm');
let isPlaying = false; // 防止重复触发播放

// 初始化BGM：设置音量+预加载
function initBGM() {
    bgm.volume = 0.5; // 音量50%，要更响改0.8，要更轻改0.2（范围0~1）
    bgm.preload = 'auto'; // 提前加载音频
}

// 启动BGM（供index.html调用，首次交互时触发）
function playBGM() {
    if (isPlaying) return; // 已经播放过就跳过，避免重复调用
    isPlaying = true;
    bgm.play().catch(err => {
        console.error('BGM加载失败，检查路径是否正确:', err);
    });
}

// 把函数挂到全局，不用处理模块导出，避免兼容问题
window.initBGM = initBGM;
window.playBGM = playBGM;
