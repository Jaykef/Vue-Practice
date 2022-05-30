<template>
	<div id='employee-table'>
		<p v-if="employees.length < 1" class='empty-table'>
			No employees
		</p>	
		<table v-else>
			<thead>
				<tr>
					<th>Employee Name</th>
					<th>Employee Email</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="employee in employees" :key="employee.id">

					<!-- Conditional display style for Employee Name -->
					<td v-if="editing === employee.id">
						<input type="text" v-model="employee.name" />
					</td>
					<td v-else>{{ employee.name }}</td>


					<!-- Conditional display style for Employee Email -->
					<td v-if="editing === employee.id">
						<input type="text" v-model="employee.email">
					</td>
					<td v-else>{{ employee.email }}</td>


					<!-- Conditional Display of Actions Buttons -->
					<td v-if="editing === employee.id">
						<button @click="editEmployee(employee)">Save</button>
						<button class="muted-button" @click="cancelEdit(employee)">Cancel</button>
					</td>
					<td v-else>
						<button @click="editMode(employee)">Edit</button>
						<button @click="$emit('delete:employee', employee.id)">
							Delete
						</button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'employee-table',
		props: {
			employees: Array 
		},

		// This is the same
		// employees: 
		// props: ['employees']
		data () {
			return {
				editing: null
			}
		},
		methods: {
			editMode(employee) {
				this.cachedEmployee = Object.assign({}, employee)
				this.editing = employee.id
			},
			cancelEdit(employee) {
				Object.assign(employee, this.cachedEmployee)
				this.editing = null
			},
			editEmployee(employee) {
				if (employee.name === '' || employee.email === '') return
				this.$emit('edit:employee', employee.id, employee)
				this.editing = null
			}
		}
	}
</script>

<style scoped>
	button {
		margin: 0 0.5rem 0 0;
	}
</style>