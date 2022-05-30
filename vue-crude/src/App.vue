<template>
	<div id="app" class="small-container">
		<h1>Employees</h1>

		<employee-form  @add:employee='addEmployee'/>
		<employee-table 
		:employees="employees" 
		@delete:employee='deleteEmployee'
		@edit:employee="editEmployee"
		/>

		<!-- this is the same thing-->
		<!--
		<employee-table v-bind:employees="employees" />
		-->

	</div>
</template>

<script type="text/javascript">
	import EmployeeTable from '@/components/EmployeeTable.vue'
	import EmployeeForm from '@/components/EmployeeForm.vue'

	export default 
	{
		name: 'app',
		components: {
			EmployeeTable,
			EmployeeForm
		},
		data() {
			return {
				employees: []
			}
		},
		methods: {
			async getEmployees() {
				try {
					const response = await fetch('https://jsonplaceholder.typicode.com/users')
					const data = await response.json()
					this.employees = data
				}
				catch (error){
					console.error(error)
				}
			},
			async addEmployee(employee) {
				try {
					const response = await fetch('https://jsonplaceholder.typicode.com/users', {
						method: 'POST',
						body: JSON.stringify(employee),
						headers: {'Content-type': 'application/json; charset=UTF-8'}
					})

					const data = await response.json()

					this.employees = [...this.employees, data]

				} catch (error) {
					console.error(error)
				}
			},
			async editEmployee(id, updatedEmployee){
				try{
					const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
						method: 'PUT',
						body: JSON.stringify(updatedEmployee),
						headers: {'Content-type': 'application/json; charset=UTF-8'}
					})

					const data = await response.json()
					this.employees = this.employees.map(employee => (employee.id === id ? data : employee))
				} catch (error) {
					console.error(error)
				}
			},
			async deleteEmployee(id) {
				try {
					await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
						method: 'DELETE'	
					})

					this.employees = this.employees.filter(employee => employee.id !== id)
				} catch (error) {
					console.error(error)
				}
			}
		},
		mounted() {
			this.getEmployees()

		}
	}
</script>

<style type="text/css" scoped>
	
	button {
		background: #009435;
		boder: 1px solid #009435;
	}

	.small-container {
		max-width: 680px
	}
</style>