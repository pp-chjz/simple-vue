<template>
  <div class="add_section">
      <h3>เพิ่มรายรับและรายจ่าย</h3>
      <div>
          <div>
              <label for="income">Income(Baht)</label>
              <br>
              <input type="text" v-model="form.income_cash">
          </div>

          <div>
              <label for="expenses">Expenses(Baht)</label>
                <br>
              <input type="text" v-model="form.expenses_cash">
          </div>

          <div>
              <label for="date">date(Baht)</label>
              <br>
              <input type="date" v-model="form.date">
          </div>

          <div>
              <label for="note">Note</label>
              <br>
              <input type="text" v-model="form.note">
          </div>

          <div>
              <button @click="addIncome">Add</button>
          </div>
          
         
      </div>
  </div>
</template>

<script>
import IncomeStore from '@/store/Income'
export default {
    data(){
        return{
            form:{
                No: 1,
                income_cash: 0,
                expenses_cash: 0,
                date: '',
                note: '-',
                number: 0
            }
        }
    },
    props: ['initNumber'],
    methods:{  
        clearForm(){
            this.form = {
                income_cash: 0,
                expenses_cash: 0,
                date: '',
                note: '-',
                number: 0
            }
        },
        addIncome(){

        
            this.number = this.form.income_cash - this.form.expenses_cash;
            let payload = {
                income_cash: parseInt(this.form.income_cash),
                expenses_cash: parseInt(this.form.expenses_cash),
                date: this.form.date,
                note: this.form.note,
                number: this.number,

            }
            
            console.log(payload),
            IncomeStore.dispatch("addIncome",payload)

            this.clearForm()
        },
        

        
    }

}
</script>

<style>

div{
    padding-block: 1%;
}

.add_section{
    background-color: rgb(197, 253, 253);
    border-radius: 20%;
    border: 5px solid rgb(26, 166, 247);
    margin-left: 36%;
    margin-right: 36%;

}

</style>