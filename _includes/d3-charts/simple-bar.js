<div class="second"> </div>
<script type="text/javascript" src="/js/d3.min.js"></script>
<style>
.second div {
  font: 10px sans-serif;
  background-color: steelblue;
  text-align: right;
  padding: 0px;
  margin: 1px;
  color: white;
}
</style>


<script type="text/javascript">
var data = [4, 5, 6, 8, 12, 15, 16, 18, 21, 23, 27, 35, 14];
d3.select("div.second")
	.selectAll("div")
		.data(data)
	.enter().append("div")
		.style("width", function(d) { return (d) * 10 + "px"; })
    	.text(function(d) { return d; });
</script>
