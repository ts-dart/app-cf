<template>
    <aside>
        <section>
            <div id="divLogo">
                <img id="one" src="images/left-arrow.svg" alt="">
                <img id="two" src="images/right-arrow.svg" alt="">
                <img id="three" src="images/c-logo.svg" alt="">
                <img id="four" src="images/a-logo.svg" alt="">
                <img id="five" src="images/s-logo.svg" alt="">
                <img id="six" src="images/h-logo.svg" alt="">
                <img id="seven" src="images/f-logo.svg" alt="">
                <img id="eight" src="images/o-logo.svg" alt="">
                <img id="nine" src="images/r-logo.svg" alt="">
                <img id="ten" src="images/c-logo.svg" alt="">
                <img id="eleven" src="images/e-logo.svg" alt="">
            </div>
            <div id="imgAndNf">
                <img src="images/hands.svg" alt="">
                <p>Notas fiscais</p>
            </div>
        </section>
    </aside>
</template>

<script>
    export default {
        name: 'AsideSidebar',
    }
</script>

<style>
    aside {
        position: absolute;
        background: #FBFDFE;
        width: 288px;
        height: 900px;
        left: 0px;
        top: 0px;
    }
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px;
        position: absolute;
        width: 288px;
        height: 144px;
        left: 0px;
        top: 0px;
    }
    #divLogo {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px;
        width: 288px;
        height: 80px;
        flex: none;
        order: 0;
        flex-grow: 0;
    }
    #imgAndNf {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        width: 288px;
        height: 64px;
        flex: none;
        order: 1;
        flex-grow: 0;
    }
    #imgAndNf p {
        width: 85px;
        height: 18px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
        display: flex;
        align-items: center;
        color: #00AD8C;
        flex: none;
        order: 0;
        flex-grow: 0;
    }
    #imgAndNf img {
        box-sizing: border-box;
        position: absolute;
        left: 0%;
        right: 0%;
        top: 20.83%;
        bottom: 20.57%;
        border: 1px solid #00AD8C;
    }
    #one {
        position: absolute;
        left: 0%;
        right: 81.51%;
        top: 0%;
        bottom: 31.64%;
    }
    #two {
        position: absolute;
        left: 5.66%;
        right: 75.86%;
        top: 31.64%;
        bottom: 0%;
    }
    #three {
        position: absolute;
        left: 27.48%;
        right: 62.23%;
        top: 11.68%;
        bottom: 22.67%;
    }
    #four {
        position: absolute;
        left: 37.87%;
        right: 53.74%;
        top: 33.82%;
        bottom: 22.65%;
    }
    #five {
        position: absolute;
        left: 47.21%;
        right: 45.97%;
        top: 33.82%;
        bottom: 22.66%;
    }
    #six {
        position: absolute;
        left: 55.15%;
        right: 35.82%;
        top: 11.5%;
        bottom: 10.76%;
    }
    #seven {
        position: absolute;
        left: 64.13%;
        right: 29.25%;
        top: 10.77%;
        bottom: 10.77%;
    }
    #eight {
        position: absolute;
        left: 69.88%;
        right: 21.67%;
        top: 33.81%;
        bottom: 22.66%;
    }
    #nine {
        position: absolute;
        left: 79.39%;
        right: 15.42%;
        top: 33.81%;
        bottom: 23.5%;
    }
    #ten {
        position: absolute;
        left: 84.57%;
        right: 8.27%;
        top: 33.82%;
        bottom: 22.65%;
    }
    #eleven {
        position: absolute;
        left: 92.04%;
        right: 0%;
        top: 33.82%;
        bottom: 22.65%;
    }
</style>