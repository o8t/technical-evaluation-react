<template>
  <v-container fluid fill-height>
    <v-card flat>
      <v-snackbar v-model="snackbar" absolute top right color="success">
        <span>Registration successful!</span>
        <v-icon dark> mdi-checkbox-marked-circle </v-icon>
      </v-snackbar>
      <v-form ref="form" @submit.prevent="submit">
        <v-container fluid>
          <v-row>

            <v-col cols="12">
              <h3>
                A wonderful clown doesn't mind to leave his name: 
              </h3>
            </v-col>    

            <v-col cols="12" sm="6">
              <v-text-field
                v-model="form.first"
                :rules="rules.name"
                color="purple darken-2"
                label="First name"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="form.last"
                :rules="rules.name"
                color="blue darken-2"
                label="Last name"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="form.email"
                :rules="rules.email"
                color="blue darken-2"
                label="Email address"
                required
                >
              </v-text-field>
            </v-col>
            <v-col cols="12">
              <h3>
                Please tell us what you look like: 
              </h3>
            </v-col>

            <v-col cols="12" sm="3">
              <v-select
                v-model="form.nose"
                :items="nose"
                color="pink"
                label="nose"
              ></v-select>
            </v-col>

            <v-col cols="12" sm="3">
              <v-select
                v-model="form.hair"
                :items="hair"
                color="pink"
                label="hair"
              ></v-select>
            </v-col>

            <v-col cols="12" sm="3">
              <v-select
                v-model="form.cloth"
                :items="cloth"
                color="pink"
                label="cloth"
              ></v-select>
            </v-col>

            <v-col cols="12">
              <h3>
                Do you hate children: 
              </h3>
            </v-col>               

            <v-col cols="12" sm="6">
              <v-slider
                v-model="form.personality"
                :rules="rules.age"
                color="orange"
                label="how"
                hint="Be honest"
                min="1"
                max="10"
                thumb-label
              ></v-slider>
            </v-col>

            <v-col cols="12">
              <v-checkbox v-model="form.terms" color="green">
                <template v-slot:label>
                  <div @click.stop="">
                    Do you accept the
                    <a href="#" @click.prevent="terms = true">terms</a>
                    and
                    <a href="#" @click.prevent="conditions = true"
                      >conditions?</a
                    >
                  </div>
                </template>
              </v-checkbox>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-btn text @click="resetForm"> Cancel </v-btn>
          <v-spacer></v-spacer>
          <v-btn :disabled="!formIsValid" text color="primary" type="submit">
            Register
          </v-btn>
        </v-card-actions>
      </v-form>
      <v-dialog v-model="terms" width="70%">
        <v-card>
          <v-card-title class="text-h6"> Terms </v-card-title>
          <v-card-text v-for="n in 5" :key="n">
            {{ content }}
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text color="purple" @click="terms = false"> Ok </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="conditions" width="70%">
        <v-card>
          <v-card-title class="text-h6"> Conditions </v-card-title>
          <v-card-text v-for="n in 5" :key="n">
            {{ content }}
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text color="purple" @click="conditions = false"> Ok </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card>
  </v-container>
</template>

<script>
const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
import {registerClown} from '../api/clownInfo.js'


export default {
  computed: {
    formIsValid() {
      return (
        this.form.first &&
        this.form.last &&
        this.form.terms
      );
    },
  },

  data() {
    const defaultForm = Object.freeze({
      first: "",
      last: "",
      nose: 'red',
      hair: 'red',
      cloth: 'tradational',
      personality: null,
      terms: false,
      email:'',
      groups: null,
    });

    return {
      form: Object.assign({}, defaultForm),
      rules: {
        age: [(val) => val < 10 || `Dude, you are crazy!`],
        name: [(val) => (val || "").length > 0 || "This field is required"],
        email: [(val) => emailPattern.test(val) || 'Invalid e-mail.'],
      },
      nose: ["Red", "green", "blue", "white", "yellow"],
      hair: ["Red", "green", 'purple'],
      cloth: ['tradational', 'freestyle'],
      conditions: false,
      content:
        "We are going to trace you",
      snackbar: false,
      terms: false,
      defaultForm,
    };
  },

  methods: {
    resetForm() {
      this.form = Object.assign({}, this.defaultForm);
      this.$refs.form.reset();
    },
    submit() {
      this.snackbar = true;
        console.log('form is: ', this.form);
      registerClown(this.form);
      this.resetForm();
    },
  },
};
</script>

<style>
</style>