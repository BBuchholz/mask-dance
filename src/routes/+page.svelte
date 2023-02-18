<script>
// @ts-nocheck

    import Button from './Button.svelte'

    const defaultText = 'Click Me'
    let responseText = defaultText

    function handleClick(messageAppension){
        //TODO: move this into a svelte notification? Just 
        //      for future reference, like boardCE does
        alert("Just testing from the scaffolding, Clicked " + messageAppension)
    }

    async function handleClickHelloWorld(){
        const response = 
            await fetch('/.netlify/functions/hello-world')
		        .then(response => response.json()
	        )

        console.log(response)
        responseText = response.message
    }

    function handleClickReset(){
        responseText = defaultText
    }

    async function handleClickTestInsert(){
        const response = 
            await fetch('/.netlify/functions/insert-note')
		        .then(response => response.json()
	        )

        console.log(response)
        responseText = response.message
    }


</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>




<Button class="primary sm" on:click={() => handleClick('one')}>
	{responseText}
</Button>

<Button class="danger lg" on:click={() => handleClick('two')}>
	{responseText}
</Button>



<Button on:click={() => handleClickHelloWorld()}>
    {responseText}
</Button>

{#if responseText !== defaultText}
<Button on:click={() => handleClickReset()}>
    Reset
</Button>
{/if}


<Button on:click={() => handleClickTestInsert()}>
    Test Insert
</Button>

