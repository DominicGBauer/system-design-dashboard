<template>
  <div>
    <h1>Questions and Answers</h1>
    <p> 
        This section of the dashboard addresses frequently asked questions in relation to the information that is provided through this platform. 
    </p>

    <h2>How is beta computed?</h2>
    <p>
        Monthly excess returns (actual returns in excess of the risk-free return) are computed for each share as
        well as for each of the proxy indices. Risk-free rates of return are computed from the JSE’s nominal swap
        yield curve, by rolling an overnight investment over the respective return period. If, however, a share has
        not been traded at a respective month-end, the aforementioned returns are computed between last and
        previous trade dates - this is the thin trading adjustment. If one were to plot these points with the index’s
        returns on the horizontal axis and the share’s returns on the vertical axis (as shown below), beta would
        be the slope of the line that best fits these points. This is illustrated in the figure below (need to insert
        figure here)   
    </p>

    <h2> Could you estimate beta?</h2>
    <p>
      This service differs from others in that the estimation procedure is refined and enhanced to improve
      the accuracy of the risk estimates. Two adjustments have been effected to the standard estimation procedure - the first improves the sampling-theory beta estimate by reducing sampling error, while the
      second further improves this estimate by reducing estimation error. Firstly, a thin-trading correction
      procedure, known as the trade-to-trade procedure, is implemented to preclude biases in sample beta
      estimates caused by thin-trading. Secondly, a Bayesian adjustment is implemented which reduces estimation error by incorporating prior distributional information on sample beta estimates. Prior research
      by BNP has shown that this adjustment improves the predictability of betas by approximately 20%  
    </p>

     <h2> What estimation periods are used?</h2>
    <p>
    Every quarter, the last five years of monthly returns are utilised, which is the last 60 data points. Research has shown that the trade-off between the desire to include more data points and concerns about
    the stationarity of beta point to five years of data as being most reasonable. It should also be noted that
    using daily or even weekly prices to maximise the number of data points is futile as it introduces considerable noise (error) that can introduce significantly biased estimates.
    
    In the beta tables, some of the more recently listed companies have less than 60 data points that were
    used in the estimation procedure. It is advisable that the betas of these companies are used with caution, especially if there are less than about 40 data points indicated in the column headed ‘# Points’
       
    </p>


    <h2> Are betas stable?</h2>
    <p>
        Betas do change! The major causes for the changes in a company’s beta are linked to a shift in the debtto-equity ratio of a company or a shift in the risk of the projects that the company undertakes.
    </p>
     
    <h2> Do betas differ in bull and bear markets?</h2>
    <p>
    It would be nice if they did, unfortunately research suggests that they don’t. However, we would be
interested to know if you find a company with a beta that does! 
    </p>
    <h2> A share with a high beta, declined while the market rose? </h2>
    <p>
    It is relatively easy to find many shares that did likewise. This occurrence is simply due to the fact that
    such shares have high unique risk. Consequently, these shares would have exhibited a large negative
    abnormal return over the particular period. Recall that for any single share only a part of the variability (total risk) is due to market movements. By combining shares into portfolios, their unique risks are
    diversified away, and it is unlikely that such declines would have been significant in the portfolio context.
    </p>
    
    <h2> Why the emphasis on beta, if it’s not conclusive?</h2>
    <p>
   Most individuals attempt to hold diversified portfolios to reduce unique risk. However, they know that
their shares are tied together by a web of co-movements that determine the limit of the diversification
benefits. This limit is determined by the market risk of their portfolio, and its beta precisely determines
the sensitivity of the portfolio to market movements.
    </p>
        
    <h2> What exactly are R**2 and 1 − R**2</h2>
    <p>
    Technically, the R2
    indicates how well the “best fitting” regression line “fits” the data points. Interpreting this in a more useful way, it tells one what proportion of the share’s movement is due to market
    movements, i.e. the proportion of market risk relative to total risk. Clearly then, 1 − R2
    tells one what
    proportion of the share’s movement is due to unique factors, i.e. 1 − R2 measures the proportion of
    unique risk relative to total risk.
    </p>

    <h2>Annual to monthly standard deviation/volatility?</h2>
    <p>
    The standard deviations (or volatilities) provided in the tables in the accompanying Excel workbook are
    calculated on a monthly basis, and then annualised. Hence, a standard deviation of 48.5% should be
    interpreted as 48.5% per annum. To convert this into monthly terms, simply divide the published figure
    by the square root of 12, i.e. (48.5%)/√
    12 = 14% per month.
    </p>




  </div>
</template>

<script>
export default {
  name: 'FAQ',
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
  background-color: rgb(15, 52, 65);

}
</style>