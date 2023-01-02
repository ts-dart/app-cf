<template>
    <div id="content-table">
        <table>
            <thead>
                <tr id="row-header">
                    <th v-for="title in titles" :key="title">{{title}}</th> 
                </tr>
            </thead>
            <tbody>
                {{genRows()}}
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
        },
        methods: {
            genRows() {
                let c = 207;
                for (let i = 0; i < this.indexes; i++) {
                    const div = document.createElement('div');
                    div.setAttribute('id', 'sty');
                    div.style.top = c+'px';
                    c += 50

                    const btn = document.createElement('button');
                    btn.innerHTML = 'Dados do cedente';

                    document.body.appendChild(div);
                    div.appendChild(btn);
                }

                console.log(this.indexes);
            }
        }
    }
</script>
    
<style>
    #sty {
        position: absolute;
        top: 94px;
        left: 340px;
        border: 1px solid #DFE2EB;
        border-radius: 6px;
        height: 45px;
        width: 970px;
        display: flex;
        justify-content: end;
    }
    #content-table {
        margin-top: 20px;
        width: 970px;
    }
    #row-body {
        height: 48px;
        margin: 10px 0;
    }
    table {
        width: 75%;
    }
    th {
        font-size: 12px;
        color: #A1A8B8;
    }
    td {
        font-size: 14px;
        color: #4D5566;
        font-weight: 600;
        text-align: center;
        width: 50px;
    }
    button {
        font-weight: 700;
        font-size: 12px;
        line-height: 16px;
        color: #727D94;
    }
</style>