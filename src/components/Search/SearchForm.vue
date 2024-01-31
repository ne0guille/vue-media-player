<script setup lang="ts">
import { ref } from 'vue'
const submitted = ref(false)
const submitHandler = async (searchParams) => {
  console.log('submitHandler', searchParams)
  // Let's pretend this is an ajax request:
  await new Promise((r) => setTimeout(r, 1000))
  submitted.value = true
}
</script>
<template>
  <!-- <div class="flex">
    <FormKit
      label="CSS Framework"
      :classes="{
        outer: 'mb-4 mr-2 w-1/2',
        inner:
          'flex items-center shadow border border-gray-300 appearance-none rounded py-2 px-3 w-full text-gray-700 leading-tight focus-within:ring-4 focus-within:ring-green-500 focus-within:ring-opacity-50',
        prefixIcon: 'h-5 w-5 mr-2 mb-0.5',
        input:
          'appearance-none border-none p-0 focus:outline-none focus:border-transparent focus:ring-0',
        label: 'my-tailwind-label'
      }"
    />
    <FormKit
      label="Form Framework"
      prefix-icon="<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'><path fill-rule='evenodd' d='M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z' clip-rule='evenodd' /></svg>"
      :classes="{
        outer: 'mb-4 mr-2 w-1/2',
        inner:
          'flex items-center shadow border border-gray-300 appearance-none rounded py-2 px-3 w-full text-gray-700 leading-tight focus-within:ring-4 focus-within:ring-green-500 focus-within:ring-opacity-50',
        prefixIcon: 'h-5 w-5 mr-2 mb-0.5',
        input:
          'appearance-none border-none p-0 focus:outline-none focus:border-transparent focus:ring-0',
        label: 'my-tailwind-label'
      }"
    />
  </div> -->

  <FormKit
    type="form"
    id="registration-example"
    :form-class="submitted ? 'hide' : 'show'"
    submit-label="Register"
    @submit="submitHandler"
    #default="{ value }"
  >
    <FormKit type="text" name="name" label="Name" />
    <FormKit type="checkbox" name="terms" label="I agree to the terms" />
  </FormKit>
</template>
