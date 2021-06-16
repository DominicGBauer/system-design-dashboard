<template>
  <div id="faq">
    <h1>FAQ</h1>
    <h2>How is beta computed?</h2>
    <paragraph
      text="Monthly excess returns (actual returns in excess of the risk-free return)
      are computed for each share as well as for each of the proxy indices.
      Risk-free rates of return are computed from the JSE’s nominal swap yield
      curve, by rolling an overnight investment over the respective return
      period. If, however, a share has not been traded at a respective
      month-end, the aforementioned returns are computed between last and
      previous trade dates - this is the thin trading adjustment. If one were to
      plot these points with the index’s returns on the horizontal axis and the
      share’s returns on the vertical axis, beta would be the
      slope of the line that best fits these points."
    />

    <h2>Could you estimate beta?</h2>
    <paragraph
      text="There is no reason why not. One would, however, need a time-series of both the share returns, volumes
      as well as the market index returns. Be careful though, as there are some techniques which can make all
      the difference between good and bad estimates. This service implements techniques that improve beta
      estimation, especially for thinly-traded shares. On this basis, it’s advisable and prudent to use the beta
      estimates provided by this service. Should more information be required in this regard, please contact
      the relevant contact person at AIFMRM."
    />

    <h2>What estimation periods are used?</h2>
    <paragraph
      text="Every quarter, the last five years of monthly returns are utilised, which
      is the last 60 data points. Research has shown that the trade-off between
      the desire to include more data points and concerns about the stationarity
      of beta point to five years of data as being most reasonable. It should
      also be noted that using daily or even weekly prices to maximise the
      number of data points is futile as it introduces considerable noise
      (error) that can introduce significantly biased estimates."
    />

    <paragraph
      text=" In the beta tables, some of the more recently listed companies have less
      than 60 data points that were used in the estimation procedure. It is advisable that
      the betas of these companies are used with caution, especially if there
      are less than about 40 data points indicated in the column headed ‘#
      Points’."
    />

    <h2>Are betas stable?</h2>
    <paragraph
      text="Betas do change! The major causes for the changes in a company’s beta are
      linked to a shift in the debt-to-equity ratio of a company or a shift in
      the risk of the projects that the company undertakes."
    />

    <h2>Do betas differ in bull and bear markets?</h2>
    <paragraph
      text="It would be nice if they did, unfortunately research suggests that they
      don’t. However, we would be interested to know if you find a company with
      a beta that does!"
    />

    <h2>A share with a high beta, declined while the market rose?</h2>
    <paragraph
      text="It is relatively easy to find many shares that did likewise. This
      occurrence is simply due to the fact that such shares have high unique
      risk. Consequently, these shares would have exhibited a large negative
      abnormal return over the particular period. Recall that for any single
      share only a part of the variability (total risk) is due to market
      movements. By combining shares into portfolios, their unique risks are
      diversified away, and it is unlikely that such declines would have been
      significant in the portfolio context."
    />

    <h2>How will trading shares affect a portfolio’s risk?</h2>
    <paragraph
      text="Assuming the existing portfolio is diversified, the beta of the portfolio is the
      primary measure that determines the risk of the portfolio. Consequently, only the beta of the
      company being traded can influence the risk of the portfolio. One can determine the effect of
      the additional share on the portfolio’s risk by remembering that the beta of the portfolio
      is simply the weighted average of its constituent betas."
    />

    <h2>Why the emphasis on beta, if it’s not conclusive?</h2>
    <paragraph
      text="Most individuals attempt to hold diversified portfolios to reduce unique
      risk. However, they know that their shares are tied together by a web of
      co-movements that determine the limit of the diversification benefits.
      This limit is determined by the market risk of their portfolio, and its
      beta precisely determines the sensitivity of the portfolio to market
      movements."
    />

    <h2>What exactly are R&sup2; and 1 − R&sup2;</h2>

    <paragraph
      text="Technically, the R&sup2; indicates how well the “best fitting” regression line
      “fits” the data points. Interpreting this in a more useful way, it tells
      one what proportion of the share’s movement is due to market movements,
      i.e. the proportion of market risk relative to total risk. Clearly then, 1
      − R&sup2; tells one what proportion of the share’s movement is due to unique
      factors, i.e. 1 − R&sup2; measures the proportion of unique risk relative to
      total risk."
    />

    <h2>Annual to monthly standard deviation/volatility?</h2>

    <p>
      The standard deviations (or volatilities) provided in the tables in the
      accompanying Excel workbook are calculated on a monthly basis, and then
      annualised. Hence, a standard deviation of 48.5% should be interpreted as
      48.5% per annum. To convert this into monthly terms, simply divide the
      published figure by the square root of 12, i.e. (48.5%) /
      <span>
        <span style="vertical-align: 16%">&radic;</span>
        <span style="text-decoration: overline"> 12 </span>
      </span>
      = 14% per month.
    </p>
  </div>
</template>

<script>
import Paragraph from './Paragraph'

export default {
  name: 'Faq',
  components: {
    Paragraph,
  },
}
</script>

<style lang="scss" scoped>
h1 {
  margin: 6rem 0 3rem 0;
}

h2 {
  text-align: left;
}

p {
  margin: 2rem 0;
  text-align: left;
}
</style>
