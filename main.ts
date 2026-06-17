import './style.css'

document.querySelector('#app')!.innerHTML = `
<div class="bg-gray-900 min-h-screen flex justify-center items-center">
  <div class="bg-gray-800 p-8 rounded-xl shadow-xl w-96">
    <h2 class="text-3xl font-bold text-center text-purple-400 mb-6">
      Welcome Back
    </h2>

    <div class="mb-4">
      <input
        type="email"
        placeholder="Email Address"
        class="w-full p-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-purple-500"
      />
    </div>

    <div class="mb-6">
      <input
        type="password"
        placeholder="Password"
        class="w-full p-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-purple-500"
      />
    </div>

    <button
      class="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold"
    >
      Login
    </button>
  </div>
</div>
`