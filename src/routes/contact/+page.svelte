<script type="ts">
  import Border from "../../components/Border.svelte";
</script>

<h1 class="text-center text-3xl my-6">Contact Me</h1>
<p class="max-w-prose mx-auto text-center">Need some website help? I'd love to hear about your project. Let's build something!</p>
<Border direction="left" />
<form class="max-w-prose mx-auto my-6 flex flex-col" method="POST" action="https://formspree.io/f/xpzvljya">
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
    <div>
      <label for="first_name">First Name</label>
      <input type="text" name="first_name" id="first_name" required />
    </div>
    <div>
      <label for="first_name">Last Name</label>
      <input type="text" name="last_name" id="last_name" required />
    </div>
  </div>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
    <div>
      <label for="email">Email</label>
      <input type="email" name="email" id="email" required />
    </div>
    <div>
      <label for="phone">Phone</label>
      <input type="tel" name="phone" id="phone" />
    </div>
  </div>
  <div>
    <label for="message">Tell me about your project</label>
    <textarea name="message" id="message" rows="3"></textarea>
  </div>
  <button type="submit" class="btn">Send</button>
</form>
<Border direction="right" />
