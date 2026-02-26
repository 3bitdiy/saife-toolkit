<script lang="ts">
  import {base} from "$app/paths";
</script>

<a href={`${base}/`} aria-label="Home">
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="8" class="home-icon-bg" />
    <g clip-path="url(#clip0_4978_285)">
      <path
        class="home-icon-path"
        d="M32.3337 30.6672V24.1455C32.3337 23.6918 32.2411 23.2428 32.0616 22.8261C31.882 22.4094 31.6193 22.0338 31.2895 21.7222L25.1453 15.9155C24.8359 15.623 24.4262 15.46 24.0003 15.46C23.5745 15.46 23.1648 15.623 22.8553 15.9155L16.7112 21.7222C16.3813 22.0338 16.1186 22.4094 15.9391 22.8261C15.7595 23.2428 15.6669 23.6918 15.667 24.1455V30.6672C15.667 31.1092 15.8426 31.5331 16.1551 31.8457C16.4677 32.1583 16.8916 32.3339 17.3337 32.3339H30.667C31.109 32.3339 31.5329 32.1583 31.8455 31.8457C32.1581 31.5331 32.3337 31.1092 32.3337 30.6672Z"
        stroke="rgb(36, 57, 101)"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_4978_285">
        <rect width="20" height="20" fill="white" transform="translate(14 14)" />
      </clipPath>
    </defs>
  </svg>
  <style>
    .home-icon-bg {
      fill: rgb(36, 57, 101);
      transition: fill 0.2s;
    }
    .home-icon-path {
      stroke: white;
      transition: stroke 0.2s;
    }
    svg:hover .home-icon-bg {
      fill: white;
    }
    svg:hover .home-icon-path {
      stroke: rgb(36, 57, 101);
    }
  </style>
</a>
