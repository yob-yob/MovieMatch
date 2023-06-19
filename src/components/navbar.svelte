<!-- Issue: FIX CLICKING DROPDOWN ON MOBILE -->
<!-- Issue: FIX TabIndex issues -->
<!-- Issue: FIX Links -->

<script>
  import Icon from '@iconify/svelte';
</script>

<div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <div class="btn btn-ghost lg:hidden">
        <Icon icon="heroicons:bars-3-center-left" class="h-5 w-5" />
      </div>
      <ul class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href="/">Item 1</a></li>
        <li>
          <a href="/" class="justify-between">
            Parent 
            <Icon icon="heroicons:chevron-right" class="h-5 w-5" />
          </a>
          <ul class="p-2">
            <li><a href="/">Submenu 1</a></li>
            <li><a href="/">Submenu 2</a></li>
          </ul>
        </li>
        <li><a href="/">Item 3</a></li>
      </ul>
    </div>
    <a href="/" class="btn btn-ghost normal-case text-xl">MovieMatch</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><a href="/">Item 1</a></li>
      <li>
        <a href="/">
          Parent
          <Icon icon="heroicons:chevron-down" class="h-5 w-5" />
        </a>
        <ul class="p-2">
          <li><a href="/">Submenu 1</a></li>
          <li><a href="/">Submenu 2</a></li>
        </ul>
      </li>
      <li><a href="/">Item 3</a></li>
    </ul>
  </div>
  <div class="navbar-end">
    <a href="/" class="btn">Get started</a>
  </div>
</div>