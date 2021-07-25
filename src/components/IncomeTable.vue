<template>
    <div>
        <table class="table_s">
            <thead>
                <tr>

                    <th>No.</th>
                    <th>Date</th>
                    <th class="income">Income(Bath)</th>
                    <th class="expenses">Expenses(Bath)</th>
                    
                    <th>Note</th>
                    <th>Total</th>


                </tr>
            </thead>

            <tbody>
                <tr v-for="(input,index) in incomes" v-bind:key="index">

                    <td>{{ index+1 }}</td>
                    <td>{{ input.date }}</td> 
                    <td class="income">{{ input.income_cash  }}</td> 
                    <td class="expenses">{{ input.expenses_cash}}</td>
                    
                    <td class="note_s">{{ input.note }}</td>
                    <td>{{ input.number }}</td>

                </tr>
            </tbody>
        </table>

        <br><br>
        <div class="total_a">
            Total_amount:{{ total }}
            <!-- <label for="total_amount" :title="total">Total_amount : </label> -->
            <button @click="refresh">refresh total</button>
        </div>

    </div>
</template>

<script>
import IncomeStore from '@/store/Income'
export default {
    data(){
        return{
            incomes:[],
            total: this.initTotal || 0
        }
    },
    props: ['initTotal'],
    created(){
        this.fetchIncome()
    },
    methods:{
        async fetchIncome(){
            //เรียก action จาก store ด้วยชื่อ Store.dispatch(ชื่อ action)
            await IncomeStore.dispatch('fetchInput')
            this.incomes = IncomeStore.getters.incomes
            console.log(this.incomes)
            this.incomes.forEach(element => {
               this.total += element.number
            });
        },
        refresh(){
            this.total = 0
            this.incomes.forEach(element => {
               this.total += element.number
            });
        }

    }
}
</script>

<style>

.table_s{
    padding-left: 5%;
    padding-right: 5%;
    width: 100%
    
    
}

.table_s{
    background-color: rgb(255, 215, 240);
    border-radius: 5%;
    border: 5px solid rgb(250, 115, 255);
}

.income{
    background-color: rgb(70, 233, 78);
    
}

.expenses{
    background-color: rgb(230, 59, 59);
}

.total_a{

    margin-left: 35%;
    margin-right: 35%;
    background-color: rgb(215, 253, 215);
    border-radius: 5%;
    border: 5px solid rgb(32, 201, 32);
}



</style>

