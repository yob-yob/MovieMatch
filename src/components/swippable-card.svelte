<script lang="ts">
  export let image: string;
  function generateRandomRotationValue() {
    return Math.floor(Math.random() * 11) - 5;
  }
</script>

<div style:transform={`rotate(${generateRandomRotationValue()}deg)`}>
  <div class="card card-compact w-96 bg-base-100 shadow-xl">
    <figure><img src="{`https://source.unsplash.com/random/500x500?${image}`}" alt="{image}" /></figure>
    <div class="card-body">
      <h2 class="card-title">{image.toUpperCase()}!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
</div>