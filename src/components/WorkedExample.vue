<template>
  <div id="example">
    <h1>Worked Example</h1>
    <paragraph
      text="In this worked example, assume that you have a portfolio consisting of
      only the four companies listed in the table below that are held in the
      given investment proportions."
    />
    <div class="table-container">
      <table>
        <caption style="caption-side: bottom">
          Table 30: Portfolio Summary
        </caption>
        <tr>
          <th>Share</th>
          <th>Sector</th>
          <th>Proportion</th>
          <th>R&sup2;</th>
          <th>Beta</th>
          <th>Std Dev</th>
        </tr>
        <tr>
          <td>AGL</td>
          <td>Mining</td>
          <td>40%</td>
          <td>70.43%</td>
          <td>1.72</td>
          <td>38.02%</td>
        </tr>
        <tr>
          <td>WHL</td>
          <td>General Retailers</td>
          <td>10%</td>
          <td>20.84%</td>
          <td>0.67</td>
          <td>27.06%</td>
        </tr>
        <tr>
          <td>APN</td>
          <td>Pharmaceuticals</td>
          <td>20%</td>
          <td>7.07%</td>
          <td>0.44</td>
          <td>30.23%</td>
        </tr>
        <tr>
          <td>LBT</td>
          <td>Life Insurance</td>
          <td>30%</td>
          <td>7.75%</td>
          <td>0.29</td>
          <td>19.19%</td>
        </tr>
      </table>
    </div>
    <paragraph
      text="In order to conduct a risk analysis for this portfolio, one needs to
      calculate the portfolio’s beta, systematic risk, specific risk and total
      risk."
    />

    <h2>Calculate Portfolio Systematic Risk</h2>
    <paragraph
      text="Recall that the beta of a portfolio is simply the weighted average of the
      component betas and can be calculated as follows:"
    />
    <p class="equation">
      Portfolio Beta = (0.4 × 1.72) + (0.1 × 0.67) + (0.2 × 0.44) + (0.3 × 0.29)
    </p>
    <p class="equation">= 0.931</p>
    <paragraph
      text="Hence, on average, this portfolio is expected to move 9.31% for every 10%
      move in the market index. It is also possible to compute the magnitude of
      systematic risk in the portfolio. To do this, the standard deviation of
      the market index (FTSE/JSE All Share Index [J203]) is required - assume
      that the annualised standard deviation is 18.44% per annum."
    />

    <p class="equation">Systematic Risk = Portfolio Beta × Std. Dev. of J203</p>
    <p class="equation">= 0.931 × 18.44%</p>
    <p class="equation">= 17.17%</p>

    <h2>Calculate Portfolio Specific Risk</h2>
    <paragraph
      text="Calculating the magnitude of a portfolio’s specific risk is a little
      trickier than calculating the specific risk of an individual share. Let’s
      begin by calculating the specific risk of the constituent shares in the
      portfolio, which is governed by the following equation:"
    />
    <p class="equation">
      (Total Risk)&sup2; = (Systematic Risk)&sup2; + (Specific Risk)&sup2;
    </p>
    <paragraph
      text="It is important to realise that one can add the square of the standard
      deviations (i.e. the variances) but cannot add the standard deviations and
      still obtain a meaningful interpretation."
    />
    <paragraph
      text="Now since R&sup2; is the proportion of systematic risk relative to total risk
      and 1 − R&sup2; is the proportion of specific risk relative to total risk, one
      can express the above relationship as:"
    />
    <p class="equation">
      (Total Risk)&sup2; = R&sup2; × (Total Risk)&sup2; + (1 − R&sup2; ) ×
      (Total Risk)&sup2;
    </p>

    <paragraph
      text="It is easy to see that the components of risk can be obtained by
      comparison of the above expressions:"
    />
    <p class="equation">
      (Specific Risk)&sup2; = (1 − R&sup2; ) × (Total Risk)&sup2;
    </p>

    <paragraph text="Similarly:" />

    <p class="equation">
      (Systematic Risk)&sup2; = R&sup2; × (Total Risk)&sup2;
    </p>

    <paragraph
      text="Note that information concerning the R&sup2; and the total risk of the
      portfolio as a whole is not available, so it is not possible to directly
      compute these risk components for the portfolio using the above
      expressions. It is possible, however, to compute these two risk components
      for individual shares."
    />
    <paragraph
      text="Recall that the standard deviation of an individual share is the measure
      of total risk for the share. It is thus possible to calculate the
      magnitude of the two components of risk for individual shares using the
      above expressions as follows:"
    />
    <div class="table-container">
      <table>
        <caption style="caption-side: bottom">
          Table 31: Individual Share Risk Decomposition
        </caption>
        <tr>
          <th>Share</th>
          <th>AGL</th>
          <th>WHL</th>
          <th>APN</th>
          <th>LBT</th>
        </tr>
        <tr>
          <td>R&sup2;</td>
          <td>70.43%</td>
          <td>20.84%</td>
          <td>7.07%</td>
          <td>7.75%</td>
        </tr>
        <tr>
          <td>1 - R&sup2;</td>

          <td>29.57%</td>
          <td>79.16%</td>
          <td>92.93%</td>
          <td>92.25%</td>
        </tr>
        <tr>
          <td>Total Risk</td>

          <td>38.02%</td>
          <td>27.06%</td>
          <td>30.23%</td>
          <td>19.19%</td>
        </tr>
        <tr>
          <td>Systematic Risk</td>
          <td>31.91%</td>
          <td>12.35%</td>
          <td>8.04%</td>
          <td>5.34%</td>
        </tr>
        <tr>
          <td>Specific Risk</td>
          <td>20.67%</td>
          <td>24.07%</td>
          <td>29.15%</td>
          <td>18.43%</td>
        </tr>
      </table>
    </div>

    <paragraph
      text="The systematic risk for each share may have also been obtained by simply multiplying the beta values
      by the annualised standard deviation of the J203 (the market proxy, in this case) as was done when the
      magnitude of portfolio systematic risk was computed."
    />

    <paragraph
      text="The calculation of the specific risk of the portfolio is shown below. Here
      the investment proportion is multiplied by the specific risk, squared and
      then summed across the constituent shares. Finally, the square root of the
      result yields the portfolio’s specific risk."
    />
    <p class="equation">
      Portfolio Specific Risk =
      <span>
        <span style="vertical-align: 16%">&radic;</span>
        <span style="text-decoration: overline">
          (0.4 × 20.67%)&sup2; + (0.1 × 24.07%)&sup2; + (0.2 × 29.15%)&sup2; +
          (0.3 × 18.43%)&sup2;
        </span>
      </span>
    </p>
    <p class="equation">= 11.78%</p>
    <paragraph
      text="Notice how effective the portfolio of shares has been in reducing specific
      risk. By diversifying amongst the above shares, the specific risk of the
      portfolio is substantially less than the specific risk of most of the
      individual shares. These calculations assume that the constituent shares
      are not all lumped in one industry. If all constituent shares are lumped
      in one industry, then the actual specific risk may be slightly higher than
      that calculated using the above method."
    />
    <h2>Calculate Portfolio Total Risk</h2>

    <paragraph text="Recall that:" />

    <p class="equation">
      (Total Risk)&sup2; = (Systematic Risk)&sup2; + (Specific Risk)&sup2;
    </p>

    <paragraph
      text="This relationship is true both for individual shares as well as
      portfolios, hence:"
    />
    <p class="equation">
      Portfolio’s Total Risk =
      <span>
        <span style="vertical-align: 16%">&radic;</span>
        <span style="text-decoration: overline">
          (17.17)&sup2; + (11.78)&sup2;
        </span>
      </span>
    </p>
    <p class="equation">= 20.82%</p>

    <paragraph
      text="We are now able to compute the portfolio’s proportion of systematic risk
      and its proportion of specific risk. Statistically, the portfolio has:"
    />

    <p class="equation">
      R&sup2; = (17.17)&sup2; /(Portfolio’s Total Risk)&sup2;
    </p>
    <p class="equation">= 68%</p>

    <paragraph text="and therefore" />
    <p class="equation">(1 − R&sup2; ) = 32%</p>

    <paragraph
      text="That is, the movements of the market index
      can explain 68% of the portfolio’s movements while only 32% of the
      portfolio’s movements can be explained by specific factors. There is
      clearly scope to improve the diversification benefits (i.e. reduce the
      risk) of the portfolio. A welldiversified portfolio would have a unique
      risk component which accounts for 5% or less of the portfolio’s total
      risk."
    />

    <h2>Calculate Portfolio Abnormal Return</h2>
    <paragraph
      text="The abnormal return is equal to the difference between the actual return
      of the portfolio and the return offered from a benchmark portfolio with
      precisely the same systematic risk as the original portfolio."
    />
    <paragraph
      text="Since the portfolio has a beta of 0.93, this implies that it has the same
      systematic risk as a portfolio which has 93% of the initial funds invested
      in the market index with the remaining 7% invested in the risk-free
      interest rate. Now suppose that the market index shows an annual return of
      25% and the interest rate is 18%. Then, over the same period:"
    />
    <p class="equation">
      Benchmark Return = Beta × Market Index Return + (1 − Beta) × Interest Rate
    </p>
    <p class="equation">= (0.93 × 25%) + (0.07 × 18%)</p>
    <p class="equation">= 24.51%</p>

    <paragraph
      text="To calculate the actual return on the portfolio, simply sum the returns
      over a particular period of the constituent securities, weighted by their
      investment proportions. In the calculation of abnormal return that
      follows, the time periods for the benchmark returns and the actual returns
      must clearly match one another. Assume the calculation of actual portfolio
      return yielded 30% per annum. Then:"
    />

    <p class="equation">Abnormal Return = Actual Return − Benchmark Return</p>
    <p class="equation">= 30% − 24.51%</p>
    <p class="equation">= 5.49%</p>

    <paragraph
      text="One can calculate the abnormal return for an individual security in
      precisely the same way, again using the notion of benchmark portfolio
      return."
    />
    <paragraph
      text="Although the systematic risk of the portfolio is identical to that of the
      benchmark portfolio, the portfolio has a specific risk of 11.78% per annum
      while the benchmark portfolio has none. The previous discussion reminds us
      that there is no automatic reward for taking on specific risk. So, unless
      you had special knowledge about your shares, an abnormal return of 5.49%
      per annum is more likely to occur, on average, two out of every five
      years. (The interpretation of risk is elaborated upon in the following
      section.)"
    />
    <paragraph
      text="One can also use the notion of a benchmark return to provide some idea of
      how the portfolio is expected to perform in the future. For example,
      assume that one is interested in the portfolio’s expected performance in
      the forthcoming year. This of course depends on the performance of the
      market to a large extent. One may have some prediction of their own for
      the market’s performance. If not, one can use past experience as a guide.
      Based on some forward-looking or historical analysis, assume that a return
      on the market index of 9% over and above the risk-free interest rate is a
      reasonable expectation. Adding an interest rate of 8% to this figure
      suggests an expected return on the market of 9% + 8% or 17% per annum.
      Hence, the expected return on the portfolio is:"
    />
    <p class="equation">
      Expected Return = Beta × Market Index Return + (1 − Beta) × Interest Rate
    </p>
    <p class="equation">= (0.93 × 17%) + (0.07 × 18%)</p>
    <p class="equation">= 16.37%</p>

    <h2>Interpreting Portfolio Risk</h2>
    <paragraph
      text="Investors who are concerned with the notion of risk are clearly concerned
      about the potential of a share’s return to drop unexpectedly. Yet, the
      standard deviation incorporates both downside risk and upside potential.
      The various components of risk have already been discussed and it has been
      mentioned that specific risk is the component of total risk that is not
      explained by market movements. Therefore, when the abnormal return was
      computed it was evident that a portfolio having zero specific risk would
      have an abnormal return of zero. Any non-zero abnormal returns
      consequently reflect the specific risk of a portfolio."
    />
    <paragraph
      text="In the context of the expected portfolio return computed above, the focus
      is on the variability of the market index forecast as well as factors
      unique to the portfolio. That is, the expected return forecast should be
      interpreted within the framework of the total risk of a portfolio."
    />
    <paragraph
      text="There is a special relationship between the standard deviation and the
      number of times one expect returns to exceed the standard deviation. For
      example, assume the portfolio has an expected return of 16.37% with a
      total risk of 5% per month. How does one interpret this? Simply, there is
      approximately a one in six chance that the actual return will be below
      expectation by the standard deviation. Similarly, however, there is an
      approximately one in six chance of the actual return being above
      expectation by the standard deviation. A one in six chance can also be
      interpreted as one year in every six years. Furthermore, one can say that
      the actual portfolio return has approximately a one in three chance of
      being below expectation by at least half a standard deviation and
      approximately a one in forty chance of being below expectation by more
      than two standard deviations."
    />
  </div>
</template>

<script>
import Paragraph from './Paragraph.vue'

export default {
  name: 'WorkedExample',
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
  margin: 2rem 0;
}

p {
  text-align: left;
}

.equation {
  display: flex;
  justify-content: center;
  margin: 1.5rem;
}

.table-container {
  display: flex;
  justify-content: center;
  margin: 3rem;
}

table {
  border-collapse: collapse;
}

table,
tr,
td,
th {
  border: 1px solid black;
}

td,
th {
  padding: 6px;
}
</style>
