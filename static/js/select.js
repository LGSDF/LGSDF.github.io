$(function() {
    $('.partial_label-selector-3D').change(function(){
        var dataset = $('#partial_label-selector1_3D').val();

        $('.partial_label_3D').hide();
        if (dataset === 'scene_0005') {
            // 当选择office0时执行的代码
            $('.partial_label_3D.scene_0005').show();
        } else if (dataset === 'apt_3') {
            // 当选择office3时执行的代码
            $('.partial_label_3D.apt_3').show();
        } else if (dataset === 'scene_0031') {
            // 当选择office3时执行的代码
            $('.partial_label_3D.scene_0031').show();
        } else{
            // 当选择room0时执行的代码
            $('.partial_label_3D.scene_0010').show();
        }
        console.log('.partial_label_3D.' + dataset)
    });
});
