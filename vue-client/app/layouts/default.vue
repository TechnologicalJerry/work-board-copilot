<template>
  <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
    <Navbar />
    <main className="flex-1">
      <slot />
    </main>
    <Footer />
  </div>
</template>
