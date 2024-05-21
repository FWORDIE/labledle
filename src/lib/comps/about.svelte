<script lang="ts">

</script>
<p>Labeladle is a WIP 'dle' game ala WORDLE.</p>
<p>All data is from ImageNet and this <a href="https://huggingface.co/datasets/Prisma-Multimodal/segmented-imagenet1k-subset" class="href">repo</a> with minimal edits by me.</p>
<p>Sorry for all the dog questions.</p>
<p>If you have a better data set please <a href="mailto:fred+labeladle@mildlyupset.com?subject=Heya">reach out.</a></p>
<p>Made by <a href="https://fredwordie.com">Fred Wordie</a></p>
<p>-</p>
<h1>Instructions:</h1>
<p>Your task is to guess the AI generated label for the highlighted segment.</p>
<p>Every wrong answer will reveal overlapping correct catogeries in green.</p>
<div class="answer s--sogsqurOxPw" style="">
    <span class="guessing">e.g. </span>
    <div class="cat">
        <p class=" correct">artifact</p>
        <p class="">/</p>
    </div>
    <div class="cat">
        <p class=" correct">instrumentality</p>
        <p class="">/</p>
    </div>
    <div class="cat">
        <p class=" correct">container</p>
        <p class="">/</p>
    </div>
    <div class="cat">
        <p class=" correct">wheeled vehicle</p>
        <p class="">/</p>
    </div>
    <div class="cat">
        <p class=" correct">self-propelled vehicle</p>
        <p class="">/</p>
    </div>
    <div class="cat">
        <p class="">motor vehicle</p>
        <p class="">/</p>
    </div>
    <div class="cat">
        <p class="">truck</p>
        <p class="">/</p>
    </div>
    <div class="cat">
        <p class="">van</p>
        <p class="">/</p>
    </div>
    <div class="cat"><p class="">police van</p></div>
</div>
<p>You have 5 attempts to guess the right label.</p>


<style lang="scss">
    a{
        color: var(--orange);
    }
    span {
		display: inline;
		display: flex;
		flex-wrap: wrap;
		margin-block: 2px;
		margin-right: 10px;
	}
	.cat {
		display: inline;
		display: flex;
		flex-wrap: wrap;
		margin-block: 2px;
		p {
			margin-block: 0px;

			&.correct {
				color: var(--green);
			}
		}
	}

	.failed.final {
		color: var(--red) !important;
	}
    
</style>