<template>
    <aside id="sider-financiador">
        <div id="sider-fornecedor">
            <div id="menu-hero">
                <div id="sider-logo">
                    <div id="Logo">
                        <div id="Icon">
                            <img id="logo" src="images/logo.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div id="menu-item">
                <img id="icon-menu-item-selected" src="images/icon-menu-item-selected.svg" alt="">
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
        background-color: #fafafa;
        box-shadow: inset -5px -5px 10px -7px #f0f0f0;
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
    #sider-logo {
        width: 288px;
        height: 80px;
        flex: none;
        order: 0;
        flex-grow: 0;
    }
    #logo {
        position: absolute;
        width: 170px;
        left: 30px;
        top: 25px;
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
    #icon-menu-item-selected {
        width: 160px
    }
</style>