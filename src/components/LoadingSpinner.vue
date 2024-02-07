<template>
  <div class="flex flex-col justify-center items-center">
    <div
      class="inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-sky-600 motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status"
    >
      <span
        class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >
      </span>
    </div>
    <slot> <strong class="m-2">Loading... </strong></slot>
  </div>
</template>
