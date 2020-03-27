<template>
    <div class="pt-5">
        <form @submit.prevent="update" method="post">
            <div class="form-group">
                <label for="name">Name</label>
                <ValidationProvider name="subscription.name" rules="required" v-slot="{ errors }">
                <input
                    type="text"
                    class="form-control"
                    id="name"
                    v-model="subscription.name"
                    name="name"
                    placeholder="Enter name"
                    :class="{'is-invalid': errors[0] && submitted}">
                </ValidationProvider>
                <div class="invalid-feedback">
                    Please provide a valid name.
                </div>
            </div>
            <div class="form-group">
                <label for="currency">Currency</label>
                <ValidationProvider name="subscription.currency" rules="required" v-slot="{ errors }">
                <select
                    name="currency"
                    class="form-control"
                    id="currency"
                    v-model="subscription.currency"
                    :class="{'is-invalid': errors[0] && submitted}">
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
                </select>
                </ValidationProvider>
                <div class="invalid-feedback">
                    Please provide a valid currency.
                </div>
            </div>
            <div class="form-group">
                <label for="amount">Amount</label>
                <ValidationProvider name="subscription.amount" rules="required" v-slot="{ errors }">
                <input
                    type="number"
                    name="amount"
                    class="form-control"
                    id="amount"
                    v-model="subscription.amount"
                    placeholder="Enter amount"
                    :class="{'is-invalid': errors[0] && submitted}">
                </ValidationProvider>
                <div class="invalid-feedback">
                    Please provide a valid amount.
                </div>
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <ValidationProvider name="subscription.description" rules="required" v-slot="{ errors }">
                <textarea
                    name="description"
                    class="form-control"
                    id="description"
                    v-model="subscription.description"
                    cols="30"
                    rows="2"
                    :class="{'is-invalid': errors[0] && submitted}"></textarea>
                </ValidationProvider>
                <div class="invalid-feedback">
                    Please provide a valid description.
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
import axios from "axios"
import { ValidationProvider } from 'vee-validate';

export default {
    components: {
        ValidationProvider
    },
    data() {
        return {
            subscription: {
                id: '',
                name: '',
                currency: '',
                amount: '',
                description: '',
            },
            submitted: false
        }
    },
    
    mounted() {
        axios
            .get('http://127.0.0.1:8000/crud/' + this.$route.params.id)
            .then(response => {
                console.log(response.data);
                this.subscription = response.data
            })
    },
    methods: {
        update: function() {
            
            axios
                .put(`http://127.0.0.1:8000/crud/${this.subscription.id}/`, this.subscription)
                .then(response => {
                    console.log(response.data)
                    this.$router.push('/')
                })
        }
    }
}
</script>