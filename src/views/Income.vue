<template>
  <div class="income_ss">
    
    <income-create-form></income-create-form>
    <br><br>
    <income-table></income-table>

  </div>
</template>

<script>
import IncomeTable from '@/components/IncomeTable'
import IncomeCreateForm from '@/components/IncomeCreateForm'
export default{

  components: {
    IncomeTable,
    IncomeCreateForm
  }
}


</script>

<style>

.income_ss{
  background-image: url("https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm222-mind-22_1_2.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=3d5d85909cafb6e0f0de9905cf40ec01");
  background-size: cover;
}

</style>

