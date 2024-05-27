<script lang="ts">

</script>
<p>Labeladle is a WIP 'dle' game ala WORDLE.</p>
<p>All data is from <a href="https://storage.googleapis.com/openimages/web/index.html" class="href">Open Images Dataset V7</a> with minimal edits by me.</p>
<p>If you have feedback, please <a href="mailto:fred+labeladle@mildlyupset.com?subject=Heya">reach out.</a></p>
<p>Made by <a href="https://fredwordie.com">Fred Wordie</a></p>
<p>-</p>
<h1>Instructions:</h1>
<p>Your task is to guess the AI generated label for the highlighted segment.</p>
<p>Every wrong answer will reveal overlapping correct catogeries in green.</p>
<div class="answer s--sogsqurOxPw" style="">
    <span class="guessing">e.g. </span>
    <div class="cat">
        <p class=" correct">Category Correct</p>
        <p class="">/</p>
    </div>
    <div class="cat">
        <p class=" correct">Category Correct</p>
        <p class="">/</p>
    </div>
    <div class="cat">
        <p class="">Category Wrong</p>
        <p class="">/</p>
    </div>
    <div class="cat">
        <p class="">Label Wrong</p>
    </div>
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