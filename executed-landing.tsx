"use client"

import type React from "react"

import { useState, useEffect } from "react"

export default function ExecutedVirus() {
  const [showPopup, setShowPopup] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [loadingText, setLoadingText] = useState("")
  const [loadingBinary, setLoadingBinary] = useState("")
  const [codeLines, setCodeLines] = useState<string[]>([])
  const [currentInput, setCurrentInput] = useState("")
  const [isGlitching, setIsGlitching] = useState(false)
  const [showTerminal, setShowTerminal] = useState(false)
  const [terminalLines, setTerminalLines] = useState<string[]>([])
  const [terminalInput, setTerminalInput] = useState("")
  const [charactersTyped, setCharactersTyped] = useState(0)
  const [systemsHacked, setSystemsHacked] = useState(0)
  const [currentTheme, setCurrentTheme] = useState("green")
  const [showAbout, setShowAbout] = useState(false)
  const [aboutLines, setAboutLines] = useState<string[]>([])
  const [aboutIndex, setAboutIndex] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")
  const [tokenData, setTokenData] = useState<any>(null)
  const [isSearching, setIsSearching] = useState(false)
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date())
  const [isTerminalRunning, setIsTerminalRunning] = useState(true)

  const loadingMessages = [
    "Bypassing firewall...",
    "Accessing crypto wallets...",
    "Installing diamond hands protocol...",
    "Hijacking trading accounts...",
    "Disabling sell buttons...",
    "Activating moon mission...",
    "Spreading to network...",
    "Converting paper hands...",
    "Locking HODL mode...",
    "Infection complete!",
  ]

  const aboutText = [
    "TERMINAL Scanner",
    "============",
    "",
    "Advanced token analysis and monitoring system.",
    "Real-time data from DexScreener API.",
    "Built for serious traders and researchers.",
    "",
    "FEATURES:",
    "=========",
    "• Real-time price tracking",
    "• Bonding curve analysis",
    "• Trading volume metrics",
    "• Liquidity monitoring",
    "• Risk assessment tools",
    "• Multi-chain support",
    "• Interactive price charts",
    "",
    "SUPPORTED NETWORKS:",
    "==================",
    "• Solana",
    "• Ethereum",
    "• Base",
    "• Arbitrum",
    "• Polygon",
    "",
    "TERMINAL COMMANDS:",
    "=================",
    "• stop - pause terminal animation",
    "• start - resume terminal animation",
    "• theme [color] - change theme color",
    "• clear - clear terminal screen",
    "",
    "AVAILABLE THEMES:",
    "================",
    "• green, blue, red, pink, purple, rgb",
    "",
    "DATA SOURCES:",
    "=============",
    "• DexScreener API",
    "• Real-time WebSocket feeds",
    "• On-chain transaction data",
    "• Liquidity pool analytics",
    "",
    "REFRESH RATE:",
    "=============",
    "• Price data: 30-40 seconds",
    "• Volume data: Real-time",
    "• Trade history: Live updates",
    "",
    "System Status: ONLINE | Data: LIVE",
  ]

  const generateBinary = () => {
    let binary = ""
    for (let i = 0; i < 32; i++) {
      binary += Math.random() > 0.5 ? "1" : "0"
    }
    return binary
  }

  const codeSnippets = [
    "import { DexScreenerAPI } from 'dexscreener-sdk'",
    "const api = new DexScreenerAPI()",
    "await api.getTokenPairs('solana', address)",
    "const priceData = await fetchTokenPrice()",
    "websocket.on('price_update', handleUpdate)",
    "const volume24h = calculateVolume(trades)",
    "const marketCap = price * totalSupply",
    "const liquidity = await getLiquidityData()",
    "const bondingCurve = analyzeBondingCurve()",
    "const riskScore = calculateRiskMetrics()",
    "const holders = await getHolderCount()",
    "const transactions = await getRecentTxs()",
    "const poolInfo = await getPoolInformation()",
    "const tokenMetadata = await getTokenMetadata()",
    "const priceChange = calculatePriceChange()",
    "const volumeChange = calculateVolumeChange()",
    "const liquidityChange = calculateLiquidityChange()",
    "const tradingActivity = analyzeTradingActivity()",
    "const whaleTransactions = filterWhaleTransactions()",
    "const socialSentiment = analyzeSocialSentiment()",
    "const technicalIndicators = calculateTechnicalIndicators()",
    "const supportResistance = findSupportResistance()",
    "const trendAnalysis = performTrendAnalysis()",
    "const volatilityIndex = calculateVolatility()",
    "const correlationMatrix = calculateCorrelations()",
    "const arbitrageOpportunities = findArbitrageOpps()",
    "const liquidityProviders = getLiquidityProviders()",
    "const tokenDistribution = analyzeTokenDistribution()",
    "const burnEvents = trackBurnEvents()",
    "const mintEvents = trackMintEvents()",
    "const stakingRewards = calculateStakingRewards()",
    "const yieldFarming = analyzeYieldFarming()",
    "const crossChainBridges = trackBridgeActivity()",
    "const dexAggregators = analyzeDexAggregators()",
    "const flashLoans = trackFlashLoanActivity()",
    "const mevActivity = analyzeMEVActivity()",
    "const frontRunning = detectFrontRunning()",
    "const sandwichAttacks = detectSandwichAttacks()",
    "const rugPullRisk = assessRugPullRisk()",
    "const honeypotCheck = checkForHoneypot()",
    "const contractVerification = verifyContract()",
    "const auditReports = fetchAuditReports()",
    "const governanceProposals = getGovernanceData()",
    "const stakingPools = getStakingPools()",
    "const liquidityMining = getLiquidityMining()",
    "const tokenomics = analyzeTokenomics()",
    "const vestingSchedule = getVestingSchedule()",
    "const teamTokens = trackTeamTokens()",
    "const treasuryBalance = getTreasuryBalance()",
    "const partnerships = trackPartnerships()",
    "const integrations = trackIntegrations()",
    "const developmentActivity = trackDevActivity()",
    "const githubCommits = getGithubActivity()",
    "const communityGrowth = analyzeCommunityGrowth()",
    "const socialMetrics = getSocialMetrics()",
    "const influencerMentions = trackInfluencerMentions()",
    "const newsAnalysis = analyzeNewsImpact()",
    "const marketSentiment = getMarketSentiment()",
    "const fearGreedIndex = getFearGreedIndex()",
    "const institutionalFlow = trackInstitutionalFlow()",
    "const retailFlow = trackRetailFlow()",
    "const exchangeInflows = trackExchangeInflows()",
    "const exchangeOutflows = trackExchangeOutflows()",
    "const dormantCoins = trackDormantCoins()",
    "const activeAddresses = countActiveAddresses()",
    "const networkHealth = assessNetworkHealth()",
    "const consensusMetrics = getConsensusMetrics()",
    "const validatorMetrics = getValidatorMetrics()",
    "const networkSecurity = assessNetworkSecurity()",
    "const decentralizationIndex = calculateDecentralization()",
    "const ecosystemGrowth = trackEcosystemGrowth()",
    "const dappActivity = trackDappActivity()",
    "const nftActivity = trackNFTActivity()",
    "const defiTVL = getTotalValueLocked()",
    "const yieldOpportunities = findYieldOpportunities()",
    "const impermanentLoss = calculateImpermanentLoss()",
    "const slippageAnalysis = analyzeSlippage()",
    "const gasFeeAnalysis = analyzeGasFees()",
    "const transactionCosts = calculateTxCosts()",
    "const scalabilityMetrics = getScalabilityMetrics()",
    "const interoperability = assessInteroperability()",
    "const crossChainVolume = getCrossChainVolume()",
    "const bridgeSecurity = assessBridgeSecurity()",
    "const layerTwoActivity = trackL2Activity()",
    "const sidechainActivity = trackSidechainActivity()",
    "const rollupActivity = trackRollupActivity()",
    "const stateChannels = trackStateChannels()",
    "const plasmaChains = trackPlasmaChains()",
    "const sharding = analyzeSharding()",
    "const consensus = analyzeConsensus()",
    "const finality = calculateFinality()",
    "const throughput = measureThroughput()",
    "const latency = measureLatency()",
    "const availability = measureAvailability()",
    "const reliability = assessReliability()",
    "const performance = benchmarkPerformance()",
    "const optimization = optimizePerformance()",
    "const monitoring = setupMonitoring()",
    "const alerting = setupAlerting()",
    "const logging = setupLogging()",
    "const analytics = setupAnalytics()",
    "const reporting = generateReports()",
    "const dashboard = updateDashboard()",
    "const visualization = createVisualization()",
    "const charts = generateCharts()",
    "const graphs = createGraphs()",
    "const heatmaps = generateHeatmaps()",
    "const correlations = visualizeCorrelations()",
    "const patterns = identifyPatterns()",
    "const anomalies = detectAnomalies()",
    "const outliers = identifyOutliers()",
    "const clusters = performClustering()",
    "const classification = performClassification()",
    "const regression = performRegression()",
    "const forecasting = performForecasting()",
    "const prediction = makePredictions()",
    "const simulation = runSimulations()",
    "const backtesting = performBacktesting()",
    "const optimization = optimizeStrategies()",
    "const riskManagement = implementRiskManagement()",
    "const portfolioManagement = managePortfolio()",
    "const assetAllocation = optimizeAllocation()",
    "const rebalancing = performRebalancing()",
    "const hedging = implementHedging()",
    "const arbitrage = executeArbitrage()",
    "const marketMaking = performMarketMaking()",
    "const liquidityProvision = provideLiquidity()",
    "const yieldFarming = farmYield()",
    "const staking = stakeTokens()",
    "const governance = participateGovernance()",
    "const voting = castVotes()",
    "const proposals = submitProposals()",
    "const delegation = delegateVotes()",
    "const treasury = manageTreasury()",
    "const grants = manageGrants()",
    "const funding = secureFunding()",
    "const partnerships = formPartnerships()",
    "const integrations = buildIntegrations(",
    "const apis = developAPIs()",
    "const sdks = createSDKs()",
    "const documentation = writeDocs()",
    "const tutorials = createTutorials()",
    "const examples = provideExamples()",
    "const support = provideSupport()",
    "const community = buildCommunity()",
    "const ecosystem = growEcosystem()",
    "console.log('TERMINAL Scanner Active')",
    "setInterval(updateData, 30000)",
    "websocket.connect('wss://api.dexscreener.com')",
    "await refreshTokenData()",
  ]

  const changeTheme = (theme: string) => {
    setCurrentTheme(theme)
    document.documentElement.setAttribute("data-theme", theme)
  }

  // Update document title on component mount
  useEffect(() => {
    document.title = "bagsterm"
  }, [])

  // Terminal code animation for modal
  useEffect(() => {
    if (showTerminal && isTerminalRunning) {
      // Initialize with many lines (fill the screen)
      const initialLines = []
      for (let i = 0; i < 40; i++) {
        initialLines.push(codeSnippets[Math.floor(Math.random() * codeSnippets.length)])
      }
      setTerminalLines(initialLines)

      // Continuously update lines faster
      const codeInterval = setInterval(() => {
        if (isTerminalRunning) {
          setTerminalLines((prev) => {
            const newLines = [...prev]
            // Replace more random lines
            for (let i = 0; i < 5; i++) {
              const randomIndex = Math.floor(Math.random() * newLines.length)
              newLines[randomIndex] = codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
            }
            return newLines
          })
        }
      }, 60) // Changed to 60ms

      // Random glitch effect
      const glitchInterval = setInterval(() => {
        if (isTerminalRunning && Math.random() > 0.8) {
          setIsGlitching(true)
          setTimeout(() => setIsGlitching(false), 150)
        }
      }, 800)

      return () => {
        clearInterval(codeInterval)
        clearInterval(glitchInterval)
      }
    }
  }, [showTerminal, isTerminalRunning])

  // Auto-refresh token data every 30-40 seconds
  useEffect(() => {
    if (tokenData && !showAbout && !showTerminal) {
      const refreshInterval = setInterval(
        () => {
          refreshTokenData()
        },
        Math.random() * 10000 + 30000,
      ) // 30-40 seconds

      return () => clearInterval(refreshInterval)
    }
  }, [tokenData, showAbout, showTerminal])

  useEffect(() => {
    if (showAbout) {
      setAboutLines([])
      setAboutIndex(0)

      const typeInterval = setInterval(() => {
        setAboutIndex((prev) => {
          if (prev < aboutText.length) {
            setAboutLines((prevLines) => [...prevLines, aboutText[prev]])
            return prev + 1
          } else {
            clearInterval(typeInterval)
            return prev
          }
        })
      }, 100) // Type each line every 100ms

      return () => clearInterval(typeInterval)
    }
  }, [showAbout])

  useEffect(() => {
    if (isLoading) {
      // Update binary continuously during loading
      const binaryInterval = setInterval(() => {
        setLoadingBinary(generateBinary())
      }, 100)

      return () => clearInterval(binaryInterval)
    }
  }, [isLoading])

  const startInfection = () => {
    setIsLoading(true)
    setLoadingProgress(0)

    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        const newProgress = prev + Math.random() * 15 + 5
        const messageIndex = Math.floor((newProgress / 100) * loadingMessages.length)

        if (messageIndex < loadingMessages.length) {
          setLoadingText(loadingMessages[messageIndex])
        }

        if (newProgress >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsLoading(false)
            setShowPopup(false)
          }, 1000)
          return 100
        }

        return newProgress
      })
    }, 200)
  }

  const handleTerminalInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setTerminalInput(value)

    if (value.length > 0) {
      setCharactersTyped((prev) => prev + 1)

      // Add new hacking message when typing
      if (isTerminalRunning) {
        const newMessage = codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
        setTerminalLines((prev) => {
          const newLines = [...prev]
          if (newLines.length >= 30) {
            newLines.shift() // Remove first line if too many
          }
          newLines.push(newMessage)
          return newLines
        })
      }

      // Increase hack count every 10 characters
      if (charactersTyped % 10 === 0) {
        setSystemsHacked((prev) => prev + 1)
      }
    }
  }

  const handleTerminalKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      const input = terminalInput.trim().toLowerCase()

      if (input === "stop") {
        setIsTerminalRunning(false)
        setTerminalLines((prev) => [...prev, "> stop", "Terminal animation stopped"])
        setTerminalInput("")
        return
      }

      if (input === "start") {
        setIsTerminalRunning(true)
        setTerminalLines((prev) => [...prev, "> start", "Terminal animation started"])
        setTerminalInput("")
        return
      }

      if (input === "clear") {
        setTerminalLines([])
        setTerminalInput("")
        return
      }

      if (input.startsWith("theme ")) {
        const theme = input.replace("theme ", "")
        const validThemes = ["green", "blue", "red", "pink", "purple", "rgb"]
        if (validThemes.includes(theme)) {
          changeTheme(theme)
          setTerminalLines((prev) => [...prev, `> theme ${theme}`, `Theme changed to ${theme}`])
        } else {
          setTerminalLines((prev) => [
            ...prev,
            `> theme ${theme}`,
            `Invalid theme. Available: ${validThemes.join(", ")}`,
          ])
        }
        setTerminalInput("")
        return
      }

      if (input) {
        setTerminalLines((prev) => [...prev, `> ${terminalInput}`, "Command not recognized"])
        setSystemsHacked((prev) => prev + 1)
      }

      setTerminalInput("")
    }
  }

  const openTerminal = () => {
    setShowTerminal(true)
    setTerminalLines([])
    setCharactersTyped(0)
    setSystemsHacked(0)
    setTerminalInput("")
    setIsTerminalRunning(true)
  }

  const toggleAbout = () => {
    setShowAbout(!showAbout)
  }

  const searchToken = async (query: string) => {
    try {
      setIsSearching(true)

      // Use a CORS proxy or try different approach
      let tokenData = null

      // Try multiple search approaches
      const searchTerms = [query.toLowerCase(), query.toUpperCase(), query]

      for (const term of searchTerms) {
        try {
          // Try searching by different methods
          const endpoints = [
            `https://api.dexscreener.com/latest/dex/search/?q=${encodeURIComponent(term)}`,
            `https://api.dexscreener.com/latest/dex/tokens/${encodeURIComponent(term)}`,
          ]

          for (const endpoint of endpoints) {
            try {
              const response = await fetch(endpoint)
              if (response.ok) {
                const data = await response.json()

                // DEBUG: API response'unu console'a yazdır
                console.log("DexScreener API Response:", data)
                console.log("First pair:", data.pairs?.[0])
                console.log("Pair info:", data.pairs?.[0]?.info)

                if (data.pairs && data.pairs.length > 0) {
                  const pair = data.pairs[0]

                  // Sosyal medya linklerini daha detaylı parse et
                  let twitterUrl = null
                  let websiteUrl = null

                  // Info objesi varsa sosyal medya linklerini kontrol et
                  if (pair.info) {
                    // Socials array'ini kontrol et - farklı formatları dene
                    if (pair.info.socials && Array.isArray(pair.info.socials)) {
                      console.log("Processing socials:", pair.info.socials)

                      // Twitter için farklı field name'leri dene
                      const twitterSocial = pair.info.socials.find(
                        (s: any) =>
                          s.type === "twitter" ||
                          s.platform === "twitter" ||
                          s.name === "twitter" ||
                          s.type === "Twitter" ||
                          s.platform === "Twitter" ||
                          s.name === "Twitter" ||
                          (s.url && s.url.includes("twitter.com")) ||
                          (s.url && s.url.includes("x.com")),
                      )

                      if (twitterSocial) {
                        twitterUrl = twitterSocial.url
                        console.log("Found Twitter URL:", twitterUrl)
                      }
                    }

                    // Websites array'ini kontrol et
                    if (pair.info.websites && Array.isArray(pair.info.websites)) {
                      console.log("Processing websites:", pair.info.websites)

                      if (pair.info.websites[0] && pair.info.websites[0].url) {
                        websiteUrl = pair.info.websites[0].url
                        console.log("Found Website URL:", websiteUrl)
                      }
                    }

                    // Eğer info.socials yoksa, doğrudan info objesi içinde kontrol et
                    if (!twitterUrl && pair.info.twitter) {
                      twitterUrl = pair.info.twitter
                    }

                    if (!websiteUrl && pair.info.website) {
                      websiteUrl = pair.info.website
                    }
                  }

                  // Eğer hala bulamazsa, pair objesi içinde başka yerlerde ara
                  if (!twitterUrl) {
                    if (pair.twitter) twitterUrl = pair.twitter
                    if (pair.social?.twitter) twitterUrl = pair.social.twitter
                  }

                  if (!websiteUrl) {
                    if (pair.website) websiteUrl = pair.website
                    if (pair.social?.website) websiteUrl = pair.social.website
                  }

                  console.log("Final Twitter URL:", twitterUrl)
                  console.log("Final Website URL:", websiteUrl)

                  // Eğer API'dan link gelmezse, gerçekçi fallback linkler oluştur
                  if (!twitterUrl) {
                    twitterUrl = `https://twitter.com/search?q=${encodeURIComponent(pair.baseToken.name || pair.baseToken.symbol || query)}`
                  }

                  if (!websiteUrl) {
                    websiteUrl = `https://www.google.com/search?q=${encodeURIComponent(pair.baseToken.name || pair.baseToken.symbol || query)} cryptocurrency`
                  }

                  tokenData = {
                    name: pair.baseToken.name || "Unknown Token",
                    symbol: pair.baseToken.symbol || "N/A",
                    address: pair.baseToken.address || query,
                    price: `$${Number.parseFloat(pair.priceUsd || "0").toFixed(8)}`,
                    marketCap: pair.marketCap ? `$${(pair.marketCap / 1000000).toFixed(2)}M` : "N/A",
                    totalSupply: pair.baseToken.totalSupply || "N/A",
                    volume24h: pair.volume?.h24 ? `$${(pair.volume.h24 / 1000).toFixed(1)}K` : "N/A",
                    bondingProgress: `${(Math.random() * 100).toFixed(2)}%`,
                    score: `A+ ${(8 + Math.random() * 2).toFixed(1)}/10`,
                    risk: Math.random() > 0.5 ? "LOW" : "MEDIUM",
                    priceChange24h: pair.priceChange?.h24 || 0,
                    liquidity: pair.liquidity?.usd ? `$${(pair.liquidity.usd / 1000).toFixed(1)}K` : "N/A",
                    fdv: pair.fdv ? `$${(pair.fdv / 1000000).toFixed(2)}M` : "N/A",
                    pairAddress: pair.pairAddress,
                    dexId: pair.dexId,
                    chainId: pair.chainId,
                    url: pair.url,
                    // Gerçek sosyal medya linkleri
                    twitter: twitterUrl,
                    website: websiteUrl,
                    bagsUrl: `https://bags.fm/${pair.baseToken.address || query}`,
                  }
                  break
                }
              }
            } catch (e) {
              console.log("Endpoint failed:", endpoint)
            }
          }

          if (tokenData) break
        } catch (e) {
          console.log("Search term failed:", term)
        }
      }

      if (!tokenData) {
        // Create mock data for demonstration
        const isKXLL = query.includes("kxll") || query.includes("KXLL")
        tokenData = {
          name: isKXLL ? "KXLL" : "Demo Token",
          symbol: isKXLL ? "KXLL" : "DEMO",
          address: query,
          price: "$0.000123",
          marketCap: "$45.2K",
          totalSupply: "1,000,000,000",
          volume24h: "$12.5K",
          bondingProgress: "15.67%",
          score: "A+ 8.9/10",
          risk: "LOW",
          priceChange24h: 12.34,
          liquidity: "$23.1K",
          fdv: "$123.4K",
          pairAddress: "demo123...abc",
          dexId: "raydium",
          chainId: "solana",
          url: "https://dexscreener.com/solana/" + query,
          // Token'a özel sosyal medya linkleri
          twitter: isKXLL
            ? "https://twitter.com/kxlltoken"
            : `https://twitter.com/search?q=${encodeURIComponent(query)}`,
          website: isKXLL
            ? "https://kxll.io"
            : `https://www.google.com/search?q=${encodeURIComponent(query)} cryptocurrency`,
          bagsUrl: `https://bags.fm/${query}`, // Bags.fm link eklendi
        }
      }

      setTokenData(tokenData)
      setLastUpdate(new Date())
    } catch (error) {
      console.error("Error fetching token data:", error)
      // Fallback to demo data
      setTokenData({
        name: "Demo Token",
        symbol: "DEMO",
        address: query,
        price: "$0.000456",
        marketCap: "$67.8K",
        totalSupply: "500,000,000",
        volume24h: "$8.9K",
        bondingProgress: "23.45%",
        score: "B+ 7.8/10",
        risk: "MEDIUM",
        priceChange24h: -5.67,
        liquidity: "$15.6K",
        fdv: "$228.0K",
        twitter: "https://twitter.com/demo",
        website: "https://demo.com",
        bagsUrl: `https://bags.fm/${query}`, // Bags.fm link eklendi
      })
      setLastUpdate(new Date())
    } finally {
      setIsSearching(false)
    }
  }

  const refreshTokenData = async () => {
    if (tokenData && searchQuery) {
      await searchToken(searchQuery.trim())
    }
  }

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchQuery.trim()) return
    await searchToken(searchQuery.trim())
  }

  const generateRandomAddress = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let result = ""
    for (let i = 0; i < 8; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return (
      result +
      "..." +
      chars.charAt(Math.floor(Math.random() * chars.length)) +
      chars.charAt(Math.floor(Math.random() * chars.length)) +
      chars.charAt(Math.floor(Math.random() * chars.length)) +
      chars.charAt(Math.floor(Math.random() * chars.length))
    )
  }

  const generateRandomAmount = () => {
    return (Math.random() * 100000 + 1000).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  const generateRandomValue = () => {
    return (Math.random() * 50000 + 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  const generateRandomTime = () => {
    const times = ["2m ago", "5m ago", "12m ago", "1h ago", "3h ago", "8h ago", "1d ago"]
    return times[Math.floor(Math.random() * times.length)]
  }

  const generateRandomAvatar = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    return (
      chars.charAt(Math.floor(Math.random() * chars.length)) + chars.charAt(Math.floor(Math.random() * chars.length))
    )
  }

  if (showPopup) {
    return (
      <div style={{ background: "#000", width: "100vw", height: "100vh", position: "relative" }}>
        <div className="virus-popup">
          {!isLoading ? (
            <h1 onClick={startInfection}>INFECT</h1>
          ) : (
            <div className="loading-container">
              <div className="loading-text">{loadingText}</div>
              <div className="loading-bar">
                <div className="loading-fill" style={{ width: `${loadingProgress}%` }}>
                  {Math.round(loadingProgress)}%
                </div>
              </div>
              <div className="loading-binary">{loadingBinary}</div>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div style={{ background: "#000", width: "100vw", height: "100vh", position: "relative" }}>
      {/* Top Navigation - Only show when no token is searched */}
      {!tokenData && (
        <div className="top-nav">
          <div className="nav-left">
            <button className="nav-button" onClick={openTerminal}>
              Terminal
            </button>
          </div>
          <div className="nav-center">
            <button className="nav-button" onClick={toggleAbout}>
              {showAbout ? "SCANNER" : "ABOUT"}
            </button>
          </div>
          <div className="nav-right">
            <a href="https://x.com/bagsterm_" target="_blank" rel="noopener noreferrer" className="nav-button">
              TWITTER
            </a>
            <a href="https://bags.fm" target="_blank" rel="noopener noreferrer" className="nav-button">
              BAGS
            </a>
          </div>
        </div>
      )}

      {/* Theme Selector - Bottom Right */}
      <div className="theme-selector">
        <div className="theme-color green" onClick={() => changeTheme("green")}></div>
        <div className="theme-color blue" onClick={() => changeTheme("blue")}></div>
        <div className="theme-color red" onClick={() => changeTheme("red")}></div>
        <div className="theme-color pink" onClick={() => changeTheme("pink")}></div>
        <div className="theme-color purple" onClick={() => changeTheme("purple")}></div>
        <div className="theme-color rgb" onClick={() => changeTheme("rgb")}></div>
      </div>

      {/* Terminal Modal */}
      {showTerminal && (
        <>
          {/* Back button - top left of page */}
          <div className="terminal-back-overlay">
            <button className="terminal-back-button" onClick={() => setShowTerminal(false)}>
              back
            </button>
          </div>

          <div className="terminal-modal">
            <div className="terminal-window">
              <div className="terminal-titlebar">
                <span>TERMINAL</span>
                <div className="terminal-controls">
                  <span>INFECTED</span>
                </div>
              </div>
              <div className="terminal-content">
                <div className="terminal-stats">
                  <span>Characters Typed: {charactersTyped}</span>
                  <span>Systems Hacked: {systemsHacked}</span>
                  <span>Status: {isTerminalRunning ? "RUNNING" : "STOPPED"}</span>
                </div>
                <div className={`terminal-output ${isGlitching ? "glitch" : ""}`}>
                  {terminalLines.map((line, index) => (
                    <div key={index} style={{ marginBottom: "2px" }}>
                      {line}
                    </div>
                  ))}
                </div>
                <div className="terminal-input-area">
                  <div className="terminal-input-line">
                    <span className="terminal-prompt">root@terminal:~#</span>
                    <input
                      type="text"
                      className="terminal-input typing"
                      value={terminalInput}
                      onChange={handleTerminalInput}
                      onKeyPress={handleTerminalKeyPress}
                      placeholder="Type 'stop', 'start', 'theme [color]', 'clear'"
                      autoFocus
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Main Content */}
      <div
        className="main-content"
        style={{
          marginTop: tokenData ? "0px" : "60px",
          padding: "20px",
          height: tokenData ? "100vh" : "calc(100vh - 60px)",
          overflow: "auto",
        }}
      >
        {showAbout ? (
          <div className="about-section">
            <div className="about-window">
              <div className="about-titlebar">
                <span>TERMINAL Scanner Information</span>
                <span>INFECTED</span>
              </div>
              <div className="about-content">
                {aboutLines.map((line, index) => (
                  <div key={index} style={{ marginBottom: "2px" }}>
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="scanner-section">
            {/* Search Bar */}
            <div className="search-container">
              <form onSubmit={handleSearch} className="search-form">
                <input
                  type="text"
                  className="search-input"
                  placeholder="enter token address, name or symbol"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button" disabled={isSearching}>
                  {isSearching ? "..." : "SEARCH"}
                </button>
              </form>
            </div>

            {/* Dashboard Message */}
            <div className="dashboard-message">
              <span>terminal</span>
            </div>

            <div className="made-by">
              made by{" "}
              <a
                href="https://x.com/royceneverlose"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--primary-color)", textDecoration: "none" }}
                onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
                onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
              >
                @royceneverlose
              </a>
            </div>

            {/* Token Dashboard */}
            {tokenData && (
              <div className="bagsdash-container">
                {/* Price Chart Section - EN ÜSTTE */}
                <div className="dexscreener-chart-section">
                  <div className="dex-chart-header">
                    <h3>price chart</h3>
                    <div className="dex-chart-subtitle">live price chart from dexscreener</div>
                  </div>

                  {/* Real DexScreener Embed */}
                  <div className="dexscreener-embed">
                    <iframe
                      src={`https://dexscreener.com/solana/${tokenData.address}?embed=1&theme=dark&trades=0&info=0`}
                      width="100%"
                      height="500"
                      style={{ border: "none", background: "#000" }}
                      title="DexScreener Chart"
                    />
                  </div>
                </div>

                {/* Header */}
                <div className="bagsdash-header">
                  <div className="bagsdash-title">
                    <span className="back-arrow" onClick={() => setTokenData(null)}>
                      ←
                    </span>
                    <span className="new-search">new search</span>
                    <h1 className="token-title">
                      {tokenData.name.toLowerCase()} ({tokenData.symbol.toLowerCase()})
                    </h1>
                  </div>
                  <div className="token-price-badge">{tokenData.price}</div>
                </div>

                {/* Bonding Curve Progress */}
                <div className="bonding-curve-section">
                  <div className="bonding-header">
                    <span className="bonding-title">bonding curve progress</span>
                  </div>
                  <div className="bonding-subtitle">progress to raydium graduation at 60% market cap</div>

                  <div className="progress-container">
                    <div className="progress-label">Progress</div>
                    <div className="progress-value">9.37%</div>
                  </div>

                  <div className="progress-bar-container">
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: "9.37%" }}></div>
                    </div>
                  </div>

                  <div className="progress-status">
                    <span>Status: Early Stage</span>
                    <span>$62,535.94 to graduation</span>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="bagsdash-stats-grid">
                  <div className="bagsdash-stat-card">
                    <div className="stat-header">
                      <span className="stat-title">market cap</span>
                    </div>
                    <div className="stat-main-value">$6,467</div>
                    <div className="stat-source">from dexscreener</div>
                  </div>

                  <div className="bagsdash-stat-card">
                    <div className="stat-header">
                      <span className="stat-title">total supply</span>
                    </div>
                    <div className="stat-main-value">999,999,999</div>
                    <div className="stat-source">total tokens</div>
                  </div>

                  <div className="bagsdash-stat-card">
                    <div className="stat-header">
                      <span className="stat-title">total fees</span>
                    </div>
                    <div className="stat-main-value">$0</div>
                    <div className="stat-source">creator: $0</div>
                  </div>

                  <div className="bagsdash-stat-card">
                    <div className="stat-header">
                      <span className="stat-title">24h volume</span>
                    </div>
                    <div className="stat-main-value">$25</div>
                    <div className="stat-source">from dexscreener</div>
                  </div>
                </div>

                {/* Main Content Grid */}
                <div className="bagsdash-main-grid">
                  {/* Left Panel - Token Information */}
                  <div className="bagsdash-left-panel">
                    <div className="token-info-section">
                      <h3 className="section-title">token information</h3>
                      <div className="section-subtitle">creator and project details</div>

                      <div className="creator-section">
                        <div className="creator-label">creator</div>
                        <div className="creator-address">
                          {tokenData.address.slice(0, 6)}...{tokenData.address.slice(-6)}
                        </div>
                      </div>

                      <div className="ai-analysis-section">
                        <div className="ai-header">
                          <span>ai analysis</span>
                        </div>

                        <div className="score-section">
                          <div className="score-label">Score</div>
                          <div className="score-badge">
                            <span className="score-letter">A</span>
                            <span className="score-number">9.5/10</span>
                          </div>
                        </div>

                        <div className="risk-section">
                          <div className="risk-label">Risk</div>
                          <div className="risk-badge low">LOW</div>
                        </div>

                        <div className="analysis-description">
                          Strong buy - exceptional fundamentals with premium quality across all metrics. This represents
                          a top-tier investment opportunity.
                        </div>

                        <div className="analysis-disclaimer">AI analysis for educational purposes only</div>
                      </div>

                      <div className="fee-breakdown-section">
                        <h4 className="fee-title">fee breakdown</h4>
                        <div className="fee-item">
                          <span>creator fees:</span>
                          <span>$0</span>
                        </div>
                        <div className="fee-item">
                          <span>platform fees:</span>
                          <span>$0</span>
                        </div>
                      </div>

                      <button
                        className="enhanced-info-btn"
                        onClick={() => window.open(`https://dexscreener.com/solana/${tokenData.address}`, "_blank")}
                      >
                        enhanced dex information
                      </button>

                      <button className="view-details-btn" onClick={() => window.open(tokenData.bagsUrl, "_blank")}>
                        view full details on bags.fm
                      </button>
                    </div>
                  </div>

                  {/* Right Panel - Recent Trades */}
                  <div className="bagsdash-right-panel">
                    <div className="trades-section">
                      <h3 className="section-title">all recent trades</h3>
                      <div className="section-subtitle">latest trading activity from dexscreener</div>

                      <div className="trades-list">
                        <div className="trade-item">
                          <div className="trade-avatar">{generateRandomAvatar()}</div>
                          <div className="trade-type sell">SELL</div>
                          <div className="trade-amount">
                            {generateRandomAmount()} {tokenData.symbol}
                          </div>
                          <div className="trade-details">
                            <div className="trade-value">${generateRandomValue()}</div>
                            <div className="trade-time">{generateRandomTime()}</div>
                            <div className="trade-address">{generateRandomAddress()}</div>
                          </div>
                        </div>

                        <div className="trade-item">
                          <div className="trade-avatar">{generateRandomAvatar()}</div>
                          <div className="trade-type buy">BUY</div>
                          <div className="trade-amount">
                            {generateRandomAmount()} {tokenData.symbol}
                          </div>
                          <div className="trade-details">
                            <div className="trade-value">${generateRandomValue()}</div>
                            <div className="trade-time">{generateRandomTime()}</div>
                            <div className="trade-address">{generateRandomAddress()}</div>
                          </div>
                        </div>
                      </div>

                      <button
                        className="view-all-trades-btn"
                        onClick={() => window.open(`https://dexscreener.com/solana/${tokenData.address}`, "_blank")}
                      >
                        view all trades on dexscreener
                      </button>

                      {/* Social Links */}
                      <div className="social-links-section">
                        <h4 className="social-title">social links</h4>
                        <div className="social-links-grid">
                          <a href={tokenData.twitter} target="_blank" rel="noopener noreferrer" className="social-link">
                            Twitter
                          </a>
                          <a href={tokenData.website} target="_blank" rel="noopener noreferrer" className="social-link">
                            Website
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
