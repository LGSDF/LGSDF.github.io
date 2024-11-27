// 图片列表
const images = [
    '.static/images/checkResult.jpg',
    '.static/images/framework.jpg',
    '.static/images/checkResult.jpg',
    '.static/images/framework.jpg',
];

// 获取滑块和图片容器
const slider = document.getElementById('image-slider');
const sliderValue = document.getElementById('slider-value');
const imageContainer = document.getElementById('slider-image');

// 更新图片和显示的滑块值
slider.addEventListener('input', function() {
    const index = slider.value - 1; // 调整索引，因为滑块的最小值是1
    imageContainer.src = images[index];
    sliderValue.textContent = slider.value;
});
