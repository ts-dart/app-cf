<template>
    <div id="content-table">
        <table>
            <thead>
                <tr>
                    <th v-for="title in titles" :key="title">{{title}}</th> 
                </tr>
            </thead>
            <tbody>
                <tr v-for="NF in NFs" :key="NF">
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
                NFs: '',
                titles: ['NOTA FISCAL', 'SACADO', 'CEDENTE', 'EMISSÃO', 'VALOR', 'STATUS'],
            }
        },
        async beforeCreate() {
            const response = await fetch('http://localhost:3000/getNFe');
            const data = await response.json();
            this.NFs = data;
        }
    }
</script>
    
<style>
    #content-table {
        margin-top: 20px;
        width: 970px;
    }
    table {
        width: 970px;
        border-collapse: collapse;
    }
    thead {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        /* width: 750px; */
    }
    tbody {
    }
    th {
        font-size: 12px;
        color: #A1A8B8;
        text-align: left;
    }
    tr {
        height: 48px;
        background: #FFFFFF;
        border: 1px solid #DFE2EB;
        border-radius: 6px;
        width: 970px;
    }
    td {
        font-size: 14px;
        color: #4D5566;
        font-weight: 600;
        text-align: right;
        margin: 0px auto 0px;
    }
</style>