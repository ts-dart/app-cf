<template>
    <div id="content-table">
        <table>
            <thead>
                <tr id="row-header">
                    <th v-for="title in titles" :key="title">{{title}}</th> 
                </tr>
            </thead>
            <tbody>
                <tr id="row-body" v-for="NF in NFs" :key="NF">
                    <td v-for="value in Object.values(NF)" :key="value">{{value}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'ContentTable',
        data() {
            return {
                indexes: '',
                NFs: '',
                titles: ['NOTA FISCAL', 'SACADO', 'CEDENTE', 'EMISSÃO', 'VALOR', 'STATUS'],
            }
        },
        async beforeCreate() {
            const response = await fetch('http://localhost:3000/getNFe');
            const data = await response.json();
            this.indexes = Object.keys(data).length;
            this.NFs = data;
            this.genRows();
        },
        methods: {
            genRows() {
                let c = 225;
                for (let i = 0; i < this.indexes; i++) {
                    const div = document.createElement('div');
                    div.setAttribute('id', 'sty');
                    div.style.top = c+'px';
                    c += 57;

                    const btn = document.createElement('button');
                    btn.innerHTML = 'Dados do cedente';

                    document.body.appendChild(div);
                    div.appendChild(btn);
                }
            }
        }
    }
</script>
    
<style>
    #sty {
        position: absolute;
        left: 330px;
        border: 1px solid #DFE2EB;
        border-radius: 6px;
        height: 45px;
        width: 970px;
        display: flex;
        justify-content: end;
        align-items: center;
    }
    #content-table {
        margin-top: 20px;
        width: 970px;
    }
    #row-body {
        height: 48px;
        margin-top: 50px
    }
    #row-body :nth-last-child(-n+2) {
        color: #00AD8C;
        font-weight: 700;
        font-size: 12px;
    }
    table {
        width: 70%;
        border-collapse: separate;
        border-spacing: 0 10px;
    }
    th {
        font-size: 12px;
        color: #A1A8B8;
        text-align: start;
    }
    td {
        font-size: 14px;
        color: #4D5566;
        font-weight: 500;
        text-align: start;
    }
    button {
        font-weight: 700;
        font-size: 12px;
        line-height: 16px;
        color: #727D94;
        background-color: white;
        margin-right: 10px;
        border-radius: 30px;
        border: 1px solid #DEE3FF;
        height: 33px;
        width: 170px;
        padding: 10px;
        line-height: 50%;
    }
</style>