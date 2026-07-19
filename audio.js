// audio.js - 仅负责BGM播放，无其他冗余逻辑
const bgm = document.getElementById('bgm');
let hasPlayed = false; // 防止重复触发播放

// 初始化BGM：设置音量+预加载
function initBGM() {
    bgm.volume = 0.5; // 音量50%，范围0~1，觉得吵就改小（比如0.3）
    bgm.preload = 'auto'; // 提前加载音频，减少延迟
}

// 启动BGM（首次交互时调用）
function playBGM() {
    if (hasPlayed) return; // 已经播放过就跳过，避免重复调用
    hasPlayed = true;
    bgm.play().catch(err => {
        console.error('BGM加载失败，检查文件名大小写:', err);
    });
}

// 挂到全局，不用处理模块导出，完全避开兼容坑
window.initBGM = initBGM;
window.playBGM = playBGM;
