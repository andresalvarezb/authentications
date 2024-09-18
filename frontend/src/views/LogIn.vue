<template>
    <div class="login-container">
        <h2>Login</h2>
        <form @submit.prevent="login">
            <div>
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="email" placeholder="Enter your email" required />
            </div>

            <div>
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="password" placeholder="Enter your password" required />
            </div>

            <button type="submit">Login</button>
        </form>

        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const email = ref('')
const password = ref('')

const login = async () => {
    try {
        const response = await fetch('http://localhost:3000/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                email: email.value,
                password: password.value,
            }),
        })

        if (!response.ok) {
            throw new Error('Login failed')
        }

        const data = await response.text()
        console.log(data)

        router.push('/home')
    } catch (error) {
        console.error('Error:', error)
    }
}
</script>

<style scoped>
.login-container {
    width: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
}

h2 {
    text-align: center;
    margin-bottom: 20px;
}

div {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
}

button {
    width: 100%;
    padding: 10px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #369f72;
}

.error-message {
    color: red;
    text-align: center;
    margin-top: 10px;
}
</style>
