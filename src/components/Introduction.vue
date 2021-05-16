<template>
  <div>
    <h1>Introduction </h1>
    <p> NOTE: Styling is incoming! </p>
    <p> 
      This dashboard has been designed as an interactive means to use the AIFRM Equity Risk Service. 
      Below this is an executive summary of the history and current status of this report. That is followed by a quick summary
      of the unique estimation features that were utilized and then finally the steps to use the dashboard are provided. 

    </p>

    <h2> Executive Summary </h2>
    <p>
        AIFMRM’s Equity Risk Service is a continuation of the same service previously offered by BNP Paribas
        Securities South Africa (Pty) Ltd (BNP). This service is aimed at providing up-to-date risk measures and
        associated statistics for the stocks and indices that are listed on the Johannesburg Stock Exchange (JSE).
        The Equity Risk Service is based not only on the American and the British experience but also on an
        ongoing research programme at the University of Cape Town (UCT). The estimates are based on a price
        and volume series database sourced from the JSE Ltd, Bloomberg L.P. and INET BFA - IRESS.   
    </p>

    <h2> Unique Estimation Features </h2>
    <p>
      This service differs from others in that the estimation procedure is refined and enhanced to improve
      the accuracy of the risk estimates. Two adjustments have been effected to the standard estimation procedure - the first improves the sampling-theory beta estimate by reducing sampling error, while the
      second further improves this estimate by reducing estimation error. Firstly, a thin-trading correction
      procedure, known as the trade-to-trade procedure, is implemented to preclude biases in sample beta
      estimates caused by thin-trading. Secondly, a Bayesian adjustment is implemented which reduces estimation error by incorporating prior distributional information on sample beta estimates. Prior research
      by BNP has shown that this adjustment improves the predictability of betas by approximately 20%  
    </p>

    <h2> User Steps </h2>
    <p>
        Step 1: Select the instrument you wish to follow by using the search bar.
        <br>
        Step 2: Select the data you wish to see about the instrument. 
        <br>
        Step 3: Refer to the instructions forthcoming to download this information in  a CSV. 
    </p>


  </div>
</template>

<script>
export default {
  name: 'Introduction',
}
</script>

<style lang="scss" scoped>
h1 {
  margin: 40px 0;
}

p {
  margin: 40px 0;
}

div {
  background-color: lightblue;

}
</style>