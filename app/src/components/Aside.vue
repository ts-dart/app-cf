<template>
    <aside id="sider-financiador">
        <div id="sider-fornecedor">
            <div id="menu-hero">
                <div id="sider-logo">
                    <div id="Logo">
                        <div id="Icon">
                            <img id="one" src="images/left-arrow.svg" alt="">
                            <img id="two" src="images/right-arrow.svg" alt="">
                        </div>
                    </div>
                    <div id="Wordmark">
                        <div id="Group1">
                            <img id="seven" src="images/f-logo.svg" alt="">
                            <img id="eight" src="images/o-logo.svg" alt="">
                            <img id="nine" src="images/r-logo.svg" alt="">
                            <img id="ten" src="images/c-logo.svg" alt="">
                            <img id="eleven" src="images/e-logo.svg" alt="">
                        </div>
                        <div id="Group2">
                            <img id="three" src="images/c-logo.svg" alt="">
                            <img id="four" src="images/a-logo.svg" alt="">
                            <img id="five" src="images/s-logo.svg" alt="">
                            <img id="six" src="images/h-logo.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div id="menu-item">
                <div id="menu-item-selected">
                    <div id="Frame678">
                        <img id="Rectangle69" src="images/standing-bar.svg" alt="">
                    </div>
                    <div id="Frame667">
                        <div id="Frame679">
                            <div id="icon-menu-proposta">
                                <div id="two-for-vector">
                                    <img id="icon-vector" src="images/hands.svg" alt="">
                                </div>
                            </div>
                        </div>
                        <div id="Frame680">
                            <p id="propostas">Notas fiscais</p> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </aside>
</template>

<script>
    export default {
        name: 'AsideSidebar',
    }
</script>

<style>
    #sider-financiador {
        position: absolute;
        width: 288px;
        height: 900px;
        left: 0px;
        top: 0px;
    }
    #sider-fornecedor {
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
    #menu-hero {
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
    #sider-logo {
        width: 288px;
        height: 80px;
        flex: none;
        order: 0;
        flex-grow: 0;
    }
    #Logo {
        position: absolute;
        width: 160px;
        height: 30px;
        left: 24px;
        top: 25px;
    }
    #Icon {
        position: absolute;
        left: 0%;
        right: 75.86%;
        top: 0%;
        bottom: 0%;
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
    #Wordmark {
        position: absolute;
        left: 27.48%;
        right: 0%;
        top: 10.77%;
        bottom: 10.76%;
    }
    #Group1 {
        position: absolute;
        left: 64.13%;
        right: 0%;
        top: 10.77%;
        bottom: 10.77%;
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
    #Group2 {
        position: absolute;
        left: 27.48%;
        right: 35.82%;
        top: 11.5%;
        bottom: 10.76%;
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
    #menu-item {
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
    #menu-item-selected {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px;
        gap: 21px;
        width: 149px;
        height: 64px;
        flex: none;
        order: 2;
        flex-grow: 0;
    }
    #Frame678 {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 10px 0px;
        gap: 10px;
        width: 4px;
        height: 84px;
        flex: none;
        order: 0;
        flex-grow: 0;
    }
    #Rectangle69 {
        width: 4px;
        height: 64px;
        background: #00AD8C;
        border-radius: 4px;
        flex: none;
        order: 0;
        flex-grow: 0;
    }
    #Frame667 {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px;
        gap: 15px;
        width: 124px;
        height: 44px;
        flex: none;
        order: 1;
        flex-grow: 0;
    }
    #Frame679 {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 10px 0px;
        gap: 10px;
        width: 24px;
        height: 44px;
        flex: none;
        order: 0;
        flex-grow: 0;
    }
    #icon-menu-proposta {
        width: 24px;
        height: 24px;
        flex: none;
        order: 0;
        flex-grow: 0;
    }
    #two-for-vector {
        position: absolute;
        left: 0%;
        right: 0%;
        top: 20.83%;
        bottom: 20.57%;
    }
    #icon-vector {
        box-sizing: border-box;
        position: absolute;
        left: 0%;
        right: 0%;
        top: 20.83%;
        bottom: 20.57%;
    }
    #Frame680 {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 10px 0px;
        gap: 10px;
        width: 85px;
        height: 44px;
        flex: none;
        order: 1;
        flex-grow: 0;
    }
    #propostas {
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
</style>