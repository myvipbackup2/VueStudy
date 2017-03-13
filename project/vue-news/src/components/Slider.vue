<template>
    <div class="banner">
        <ul class="clearfix">
            <li><img src="../assets/images/img_1.jpg" alt=""/>
                <div class="text-box">
                    <h2>老骥伏枥 尽显风骨:我校俄汉大词典编写团队感动龙江</h2>
                    <p>作者：杜寒三</p>
                </div>
            </li>
            <li><img src="../assets/images/img_2.jpg" alt=""/>
                <div class="text-box">
                    <h2>我校当选为中俄战略协作高端合作智库第一届理事单位</h2>
                    <p>作者：社会科学处</p>
                </div>
            </li>
            <li><img src="../assets/images/img_3.jpg" alt=""/>
                <div class="text-box">
                    <h2>校党委常委召开2016年度专题民主生活会</h2>
                    <p>作者：李可宝</p>
                </div>
            </li>
            <li><img src="../assets/images/img_4.jpg" alt=""/>
                <div class="text-box">
                    <h2>我校召开国际化发展研讨会</h2>
                    <p>作者：国际合作与交流处 国际合作与交流处</p>
                </div>
            </li>
        </ul>
        <ol>
            <li class="active"></li>
            <li></li>
            <li></li>
            <li></li>
        </ol>
    </div>
</template>
<script>
    export default {
        mounted(){
            this.fnSlider();
        },
        methods: {
            fnSlider(){
                $(function () {
                    var mySwipe = new Swipe($('.banner')[0], {
                        auto: 2000,
                        continuous: true,
                        stopPropation: true,
                        callback: function (index, element) {
                            $('.banner ol li').removeClass('active');
                            $('.banner ol li').eq(index).addClass('active');
                        }
                    });
                });
            }
        }
    }
</script>