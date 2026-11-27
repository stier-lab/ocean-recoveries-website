// Editorial summaries tied to publication IDs, not sentences extracted from story prose.
// Sources identify the abstract or opening text inspected, not a full-paper review.
export interface StoryTakeaway {
  points: [string, string];
  scope: string;
  source: string;
}

export const storyTakeaways: Record<string, StoryTakeaway> = {
  'white-2026-pnas-cnd': {
    points: ['Fish species richness and differences in when species fluctuate help stabilize nutrient supply.', 'The patterns depend on spatial scale and were examined across several coastal habitats, including kelp forests and coral reefs.'],
    scope: 'Analysis of long-term fish-community records and consumer-mediated nutrient dynamics.',
    source: 'src/data/publications.ts: white-2026-pnas-cnd abstract',
  },
  'vega-2026-biolett': {
    points: ['Pocillopora corals with resident damselfishes closed wounds faster in this experiment.', 'Photosynthetic performance in newly healed tissue also improved; the response was especially apparent for larger wounds.'],
    scope: 'Fish presence/absence experiment on wounded Pocillopora; wound closure is not a measure of whole-reef recovery.',
    source: 'src/data/publications.ts: vega-2026-biolett abstract',
  },
  'detmer-2026-ecolmodel': {
    points: ['In the model, mutualists evolved preferences for larger, higher-quality hosts.', 'Those individual preferences could leave populations smaller and slower to recover than weaker preferences did.'],
    scope: 'Stage-structured simulations inspired by coral and damselfish mutualisms, not a field test of fish choice.',
    source: 'src/data/publications.ts: detmer-2026-ecolmodel abstract',
  },
  'stier-osenberg-2025-ele': {
    points: ['Density-dependent mortality varied widely among studies, including studies of the same fish species.', 'Predators, body size, colonization density, and study context help explain why crowding does not have one consistent effect.'],
    scope: 'Meta-analysis of nearshore fishes, mainly during early or small life stages.',
    source: 'src/data/publications.ts: stier-osenberg-2025-ele abstract',
  },
  'samhouri-2025-plosclim': {
    points: ['Updating harvest rules for climate-driven changes did not improve fish biomass and yield in every modeled scenario.', 'Which strategy performed better depended on the demographic change and whether management prioritized biomass or harvest.'],
    scope: 'Fishery simulations; these are not measured outcomes of coral restoration.',
    source: 'publications/extracted/Samhouri et al. (PLoS Climate) 2025.json: abstract',
  },
  '1': {
    points: ['Some coral-associated fishes supply nutrients, improve water movement, remove sediment, or defend their hosts.', 'Different fishes provide different services, so coral benefits cannot be inferred from fish abundance alone.'],
    scope: 'Review of fish-derived services to corals, not a single new experiment.',
    source: 'publications/extracted/Stier et al. (Coral Reefs) 2025.json: abstract and introduction',
  },
  '2': {
    points: ['Fishes and invertebrates living with corals can influence how their hosts resist and recover from stress.', 'Their effects include nutrient provision and defense, connecting coral resilience to the surrounding animal community.'],
    scope: 'Synthesis of research on coral-associated animals; effects depend on the organisms and environmental conditions.',
    source: 'publications/extracted/Stier and Osenberg (Current Biology) 2024 II.json: opening text',
  },
  '3': {
    points: ['Trapeziid guard crabs shelter within branching corals and can defend them against coral predators.', 'The crabs also remove sediment, linking the survival of the coral host with the animals living inside it.'],
    scope: 'A natural-history guide to guard-crab biology and coral mutualism.',
    source: 'publications/extracted/Stier and Osenberg  (Current Biology) 2024.json: guard-crab guide',
  },
  '4': {
    points: ['Dead coral skeletons reduced modeled resilience when they sheltered macroalgae from grazing.', 'Retaining structure broadened the modeled conditions under which coral- and algae-dominated states could both persist.'],
    scope: 'Mathematical model of disturbance legacies, not evidence that every dead skeleton causes a regime shift.',
    source: 'publications/extracted/Kopecky et al. (Ecology) 2023.json: abstract',
  },
  '5': {
    points: ['Photogrammetry detected changes in branching-coral volume that manual measurements obscured.', 'Photogrammetric skeletal volume also better predicted the abundance and richness of coral residents in this study.'],
    scope: 'Comparison of measurement methods for Pocillopora colonies and their associated animals.',
    source: 'src/data/publications.ts: 5 abstract',
  },
  '6': {
    points: ['Lobster and urchin body sizes strongly influenced feeding interactions, particularly when urchins were abundant.', 'General size-scaling relationships did not reliably reproduce the magnitude of the measured species-specific interaction.'],
    scope: 'Mesocosm feeding experiments combined with field observations and model-based estimates of interaction strength.',
    source: 'publications/extracted/Difiore and Stier (JAE) 2023.json: abstract',
  },
  '7': {
    points: ['Lobster consumption increased faster than metabolic demand over the middle of the experimental temperature range.', 'Performance broke down at the extremes, and some lobsters died in the warmest treatment.'],
    scope: 'Laboratory acclimation and feeding measurements on California spiny lobsters, not a forecast of population mortality.',
    source: 'publications/extracted/Csik et al. (FMS) 2023.json: opening abstract',
  },
  '8': {
    points: ['A predator could benefit a modeled coral host by preferentially consuming a competitively dominant, lower-quality mutualist.', 'The outcome depended on competition, service quality, and vulnerability to predation.'],
    scope: 'A mathematical model of competing mutualists and their predator; indirect benefits are conditional.',
    source: 'publications/extracted/Moeller et al. (Ecosphere) 2023.json: abstract',
  },
  '9': {
    points: ['Recoveries were uncommon across the large-carnivore species assessed, with many improvements concentrated in marine mammals.', 'Recovery was associated with protective legislation and management of exploitation; habitat modification and conflict remained important threats.'],
    scope: 'Comparative synthesis using conservation assessments; associations do not isolate the causal effect of each intervention.',
    source: 'publications/extracted/Ingeman et al. (Scientific Reports) 2022.json: opening abstract',
  },
  '10': {
    points: ['The analysis found no relationship between local human influence and coral resistance to disturbance.', 'Some more developed locations recovered faster, so remoteness alone was not a reliable indicator of resilience in these records.'],
    scope: 'Comparison of coral-community responses across sites, not evidence that local human pressures benefit reefs.',
    source: 'publications/extracted/Baumann et al. (GCB) 2021.json: abstract',
  },
  '11': {
    points: ['The study links fishing and warming to a potentially difficult-to-reverse shift in the North Sea ecosystem.', 'The analysis emphasizes how local and global pressures can act together, complicating a return to earlier conditions.'],
    scope: 'Review and catastrophe-theory analysis; potential irreversibility is not proof that all recovery is impossible.',
    source: 'publications/extracted/Sguotti et al. (Frontiers in Marine Science) 2022.json: opening abstract',
  },
  '12': {
    points: ['Feeding experiments measured how urchin grazing capacity increased with urchin biomass.', 'Long-term kelp records linked the balance of estimated grazing demand and kelp supply to forest persistence and loss.'],
    scope: 'Experiments and monitoring in Southern California; the pencil animation is conceptual, not a measured sequence.',
    source: 'publications/extracted/Rennick Difiore et al. (Ecology) 2022.json: abstract',
  },
  '13': {
    points: ['Lobster trapping surveys found increased abundance and biomass inside reserves and near their borders over a decade.', 'The spatial pattern supports increased spillover at the studied reserves as protected populations built up.'],
    scope: 'Repeated scientific trapping at Northern Channel Islands reserves; scientific trap catches are not total commercial landings.',
    source: 'publications/extracted/Lenihan et al. (Ecosphere) 2022.json: abstract',
  },
  '14': {
    points: ['Fish-derived nitrogen could promote coral growth in the physiological model.', 'The same subsidy could worsen bleaching or slow recovery under some conditions because shading benefits competed with carbon costs.'],
    scope: 'Dynamic energy-budget model; the balance depends on environmental conditions and model assumptions.',
    source: 'publications/extracted/Detmer et al. (JTB) 2022.json: abstract',
  },
  '15': {
    points: ['More precise monitoring was especially valuable when modeled resources spent time near a collapse threshold.', 'Increasing monitoring as resources declined could balance information costs against the costs of mismanagement.'],
    scope: 'Resource-management simulations with depensation, not a universal monitoring budget or guaranteed safe harvest rule.',
    source: 'publications/extracted/Stier et al. (Proc B) 2022.json: abstract',
  },
  '16': {
    points: ['Greater urbanization was associated with lower freshwater invertebrate biodiversity in the paired watersheds.', 'Coastal marine biodiversity showed a different pattern, illustrating that urbanization effects need not carry unchanged from land to sea.'],
    scope: 'Observational comparisons of paired Puget Sound watersheds and coastal habitats, not an experiment adding urban development.',
    source: 'publications/extracted/Samhouri et al. (Frontiers in Marine Science) 2022.json: opening abstract',
  },
  '17': {
    points: ['Lobster populations built up more within the studied reserves than in unprotected areas.', 'Nearby fishing zones had greater increases in total catch and effort, but not catch per unit effort.'],
    scope: 'Local Southern California reserve and fishery comparisons; total catch and fishing efficiency are different outcomes.',
    source: 'publications/extracted/Lenihan et al. (Scientific Reports) 2021.json: opening abstract',
  },
  '18': {
    points: ['Conservation disagreements can arise from different interpretations of facts as well as different values.', 'The authors argue for inclusive processes that acknowledge multiple perspectives, including those held by scientists.'],
    scope: 'Conceptual discussion of the Rashomon effect in conservation, not a test of one conflict-resolution intervention.',
    source: 'publications/extracted/Levin et al. (Bioscience) 2020.json: abstract',
  },
  '19': {
    points: ['Modeled storm regimes changed kelp abundance and the competitive balance between understory algae and sessile invertebrates.', 'A long-term community time series was qualitatively consistent with the model predictions.'],
    scope: 'Community model compared with monitoring data; storms can affect the seafloor directly as well as through kelp loss.',
    source: 'publications/extracted/Detmer et al. (Ecology) 2021.json: abstract',
  },
  '20': {
    points: ['Coral consumers increased mortality, but that mortality did not depend on colony density in the experiment.', 'When consumers were excluded, denser Acropora pulchra colonies extended faster; the study found no evidence for a predator pit.'],
    scope: 'Experiment on small coral colonies; growth and survival responded differently.',
    source: 'publications/extracted/Kopecky et al. (Coral Reefs) 2021.json: abstract',
  },
  '21': {
    points: ['The same parrotfish species differed in feeding rates, time spent grazing, and grazing intensity among Caribbean sites.', 'Herbivore biomass alone may therefore miss differences in grazing impact among reefs.'],
    scope: 'Field observations of two scarid species; proposed explanations for behavioral variation still need testing.',
    source: 'publications/extracted/Wilson et al. (Marine Biology) 2021.json: abstract',
  },
  '22': {
    points: ['Lionfish and a native mesopredator had similar direct effects on the tested prey species in Caribbean Panama.', 'Their relative abundance and local ecological context matter when judging the effects of the invasion.'],
    scope: 'Evidence for a particular prey and study setting, not a conclusion that lionfish are harmless throughout the Caribbean.',
    source: 'publications/extracted/Samhouri and Stier (Coral Reefs) 2021.json: abstract',
  },
  '23': {
    points: ['Food-web interactions connect communities across space, as consumers and resources move among habitats.', 'Species\u2013area relationships can therefore depend on trophic interactions as well as habitat area and dispersal.'],
    scope: 'Book-chapter synthesis connecting spatial ecology and food webs, not a new field experiment.',
    source: 'publications/extracted/Holt et al. (SAR Book) 2021.json: opening synthesis',
  },
  '24': {
    points: ['Human-driven changes in animal behavior can alter ecological interactions and ecosystem processes.', 'Those consequences are not automatic: other processes can dampen or prevent them.'],
    scope: 'Review and conceptual framework linking behavior change to ecological outcomes.',
    source: 'publications/extracted/Wilson et al. (Ecology Letters) 2020.json: abstract',
  },
  '25': {
    points: ['More stable giant kelp was associated with more stable benthic communities, largely through its association with species richness.', 'Diversity\u2013stability relationships differed when algae and invertebrates were analyzed separately rather than pooled.'],
    scope: 'Long-term observations in the Santa Barbara Channel; statistical pathways are not isolated experimental mechanisms.',
    source: 'publications/extracted/Lamy et al. (Ecology) 2020.json: abstract',
  },
  '26': {
    points: ['Stable regional totals can conceal volatile local populations and local collapse risk.', 'The modeled harvest strategies showed ways to reduce local risk while maintaining yield.'],
    scope: 'Theory, a Pacific herring example, and management-strategy simulations; regional and local stability are different outcomes.',
    source: 'publications/extracted/Okamoto et al. (Ecological Applicaitons) 2020.json: abstract',
  },
  '27': {
    points: ['The authors propose linking ocean and land-based climate policy rather than treating them as separate agendas.', 'The framework considers energy, transport, food security, and habitat restoration together.'],
    scope: 'Policy framework and synthesis, not a measured evaluation of an enacted Green New Deal.',
    source: 'publications/extracted/Dundas et al. (Conservation Letters) 2020.json: abstract',
  },
  '28': {
    points: ['Herring records showed erosion of the spatial population portfolio and declining population growth.', 'Local harvest rates could be much higher than regional averages, exposing locally dependent people and predators to different risks.'],
    scope: 'Time-series modeling of Northeast Pacific herring; fishing, climate, and population growth were evaluated together.',
    source: 'publications/extracted/Stier et al. (Ecosphere) 2020.json: abstract',
  },
  '29': {
    points: ['The compiled fish data supported a metabolic scaling coefficient near 0.89 rather than several commonly assumed values.', 'Support for species-specific slopes and intercepts argues against treating one scaling rule as exact for every fish.'],
    scope: 'Comparative analysis of standard metabolic rate with an evidential model-selection framework.',
    source: 'publications/extracted/Jerde et al. (Frontiers in Physiology) 2019.json: opening abstract',
  },
  '30': {
    points: ['Long-term ecological research sites can complement global coastal and ocean observing networks.', 'Coordination across sites and disciplines helps connect sustained local measurements with broader environmental questions.'],
    scope: 'Overview of the ILTER network and opportunities for coordinated observation.',
    source: 'publications/extracted/Muelbert et al. (Frontiers in Marine Science) 2019.json: opening synthesis',
  },
  '31': {
    points: ['Ocean recovery targets must account for changing environmental conditions and different societal goals.', 'The review argues for flexible institutions and ecosystem perspectives alongside species-level recovery efforts.'],
    scope: 'Review of recovery goals and strategies; recovery need not mean a return to one historical baseline.',
    source: 'publications/extracted/Ingeman et al. (Science) 2019.json: structured summary',
  },
  '32': {
    points: ['Predator density, herbivore density, and reef area were linked to grazing patterns around Caribbean patch reefs.', 'Reef area and herbivore density helped explain halo width, so halo size cannot be interpreted as a simple predator count.'],
    scope: 'Field measurements linked with satellite imagery; the proposed monitoring application needs ecological context.',
    source: 'publications/extracted/Difiore et al. (MEPS) 2019.json: abstract',
  },
  '33': {
    points: ['Both the amount and timing of dispersal changed grazer-community diversity in the mesocosm experiment.', 'Variable dispersal reduced within-patch richness and increased differences among patches within dispersal-intensity treatments.'],
    scope: 'Experimental seagrass-associated invertebrate metacommunities, not a universal response to connectivity.',
    source: 'publications/extracted/Stier et al. (MEPS) 2019.json: abstract',
  },
  '34': {
    points: ['More active purple urchins were less likely to survive encounters with lobsters.', 'That activity\u2013survival relationship was stronger for smaller urchins; covering behavior did not independently predict survival.'],
    scope: 'Mesocosm predation trials; consequences for entire kelp forests were not tested.',
    source: 'publications/extracted/Pretorius et al. (Ethology) 2019.json: abstract',
  },
  '35': {
    points: ['Neighboring habitat patches could redirect colonists and create persistent density differences among otherwise identical patches.', 'Post-settlement mortality and the timing and supply of colonists determined whether those differences persisted in the model.'],
    scope: 'Stochastic spatial model with reef-fish context; patch density alone does not identify habitat quality.',
    source: 'publications/extracted/Hamman et al. Theoretical Ecology) 2017.json: abstract',
  },
  '36': {
    points: ['Alternative statistical methods identified candidate nonlinear responses to human and environmental pressures in the California Current.', 'Agreement between methods was limited, emphasizing that candidate thresholds depend on the analytical approach.'],
    scope: 'Analysis of ecosystem indicators and pressures, not experimentally established safe limits for every activity.',
    source: 'publications/extracted/Samhouri et al. (Ecosphere) 2017.json: abstract',
  },
  '37': {
    points: ['Experts differed markedly in how they represented the Pacific herring food web.', 'Simulating herring recovery through those representations produced different expectations of its ecological importance.'],
    scope: 'Analysis of scientific, local, and traditional knowledge perspectives; the models represent perceptions, not observed recovery outcomes.',
    source: 'publications/extracted/Stier et al (Conservation Letters) 2018.json: abstract',
  },
  '38': {
    points: ['Recovering predators and prey together was generally faster and steadier than sequential recovery in the model.', 'A predator-first strategy could delay recovery by suppressing prey while they were still rebuilding.'],
    scope: 'Dynamical food-web theory with comparisons to recovery cases; not a guarantee for every restoration setting.',
    source: 'publications/extracted/Samhouri et al. (NEE) 2017.json: opening abstract',
  },
  '39': {
    points: ['High participation costs can favor extreme stakeholder positions in environmental decisions.', 'That social feedback can reinforce an ecosystem regime even when broader preferences favor changing it.'],
    scope: 'Conceptual and economic argument about participation and regime persistence, not a controlled intervention.',
    source: 'publications/extracted/Lynham et al. (Marine Policy) 2016.json: abstract',
  },
  '40': {
    points: ['Predators reduced the abundance of young reef fishes across the experiments reviewed.', 'After accounting for the number of fish sampled, there was little evidence of an additional effect on species diversity.'],
    scope: 'Experimental synthesis separating changes in fish abundance from changes in diversity.',
    source: 'publications/extracted/Stier et al (Coral Reefs) 2017.json: abstract',
  },
  '41': {
    points: ['The sequence of arrival affected young damselfish survival more strongly than competitor abundance did.', 'Late arrivals were less aggressive and avoided encounters with established competitors.'],
    scope: 'Settlement experiment on lemon and Ambon damselfishes within the tested abundance range.',
    source: 'publications/extracted/Geange et al. (Coral Reefs) 2016.json: abstract',
  },
  '42': {
    points: ['Recovering predators can compete with people for prey, consume protected species, or compete with other protected predators.', 'The authors propose combining multispecies science, policy tools, and explicit tradeoff analysis to address these conflicts.'],
    scope: 'Policy perspective using Northeast Pacific and Greater Yellowstone examples, not a test of one recovery intervention.',
    source: 'publications/extracted/Marshall et al. (Conservation Letters) 2015.json: abstract',
  },
  '43': {
    points: ['Food-web interactions and the order of recovery can complicate the return of depleted apex predators.', 'Recovery plans need to adapt as environmental conditions and interactions among species change.'],
    scope: 'Synthesis of ecological theory and recovery cases; predator protection alone does not guarantee ecosystem recovery.',
    source: 'publications/extracted/Stier et al. (Science Advances) 2016.json: opening abstract',
  },
  '44': {
    points: ['Differences in sample size can change estimates of how much communities differ among patches.', 'Patch-level rarefaction helps separate those sampling effects from ecological differences.'],
    scope: 'Methodological study with a stochastic model and two case studies.',
    source: 'publications/extracted/Stier et al. (Ecosphere) 2016.json: abstract',
  },
  '45': {
    points: ['Small and large hawkfish had similar effects on the prey tested in feeding trials.', 'Field surveys also linked hawkfish presence to lower prey occurrence without a detectable predator-size effect.'],
    scope: 'One predator species and prey context; the result does not imply that predator size never matters.',
    source: 'publications/extracted/Ghallager et al. (Royal Society Open) 2016.json: opening abstract',
  },
  '46': {
    points: ['The synthesis identifies seven principles for managing marine ecosystems that may cross tipping points.', 'Early action, maintaining resilience, and adaptive monitoring are central to the proposed approach.'],
    scope: 'Management synthesis, not a validated early-warning system for every ecosystem.',
    source: 'publications/extracted/Selkoe et al (ESS) 2015.json: abstract',
  },
  '47': {
    points: ['Genetic variation in cottonwoods altered the leaf-litter subsidy supporting an aquatic food web.', 'Its effects interacted with variation in stickleback traits to change invertebrate abundance and available phosphorus.'],
    scope: 'Freshwater mesocosm experiment testing variation within both a plant and a predator species.',
    source: 'publications/extracted/Rudman et al. (PRSB) 2015.json: opening abstract',
  },
  '48': {
    points: ['Whether a partner benefits its host can depend on other species in the community.', 'Occasional protection and changes in partners over a host\u2019s lifetime can alter the apparent costs and benefits of a mutualism.'],
    scope: 'Book-chapter synthesis illustrated with ant\u2013acacia interactions, not a new coral experiment.',
    source: 'publications/extracted/Palmer et al. (Mutualisms) 2015.json: opening text',
  },
  '49': {
    points: ['Adding simulation replicates can make even a tiny effect statistically significant.', 'Simulation studies should emphasize the size and meaning of an effect rather than treating a small p-value as the main result.'],
    scope: 'Methodological argument about simulation experiments, not a rejection of statistical inference in empirical research.',
    source: 'publications/extracted/White et al. (Oikos) 2014.json: opening text',
  },
  '50': {
    points: ['Axolotls induced to metamorphose regenerated limbs more slowly than age-matched aquatic animals.', 'Regenerated limbs also showed more skeletal abnormalities and reduced cell proliferation in the regenerating tissue.'],
    scope: 'Laboratory study of induced metamorphosis in axolotls; this is not a coral-healing experiment.',
    source: 'publications/extracted/Monaghan et al. (Regeneration) 2014.json: abstract',
  },
  '51': {
    points: ['Predators and habitat arrangement independently affected the assembly of young reef-fish communities.', 'Predators reduced abundance and diversity, while fragmentation increased species richness in this experiment.'],
    scope: 'Factorial patch-reef experiment manipulating a grouper predator, patch size, and fragmentation.',
    source: 'publications/extracted/Stier et al. (Ecology) 2014.json: abstract',
  },
  '52': {
    points: ['Prey-fish species richness declined with island isolation more strongly than predator richness did.', 'A colonization\u2013extinction model showed how dispersal differences could produce this pattern.'],
    scope: 'Pacific island comparison and model; a higher ratio of predator species is not a measurement of predator biomass.',
    source: 'publications/extracted/Stier Hein et al. (Nature Communications) 2014.json: opening abstract',
  },
  '53': {
    points: ['Harvesting herring eggs and harvesting adults produced different tradeoffs in the population model.', 'Predator food requirements did not automatically imply stricter harvest limits than fishery objectives did.'],
    scope: 'Stochastic, age-structured herring model; the results are conditional on its population and predator assumptions.',
    source: 'publications/extracted/Shelton et al. (Nature Scientific Reports) 2014.json: opening abstract',
  },
  '54': {
    points: ['Predators reduced the abundance and observed richness of small animals living within branching corals.', 'Predator identity also changed community composition; much of the richness decline reflected fewer animals being sampled.'],
    scope: 'Predator manipulation on Pocillopora-associated animals; effects on coral performance were not measured.',
    source: 'publications/extracted/Stier and Leray (Coral Reefs) 2014.json: abstract',
  },
  '55': {
    points: ['Individual grouper feeding rates declined where predator density was higher.', 'Competition among predators or changes in prey behavior could explain that pattern.'],
    scope: 'Reanalysis of observational feeding data; the alternative mechanisms were not experimentally separated.',
    source: 'publications/extracted/Stier and White (Coral Reefs) 2014.json: abstract',
  },
  '56': {
    points: ['Both predator density and arrival time affected reef-fish community assembly.', 'Predators arriving later reduced prey abundance more strongly, while within-patch species richness did not change.'],
    scope: 'Hawkfish patch-reef experiment; abundance, community composition, and richness responded differently.',
    source: 'publications/extracted/Stier et al (Ecology) 2013.json: abstract',
  },
  '57': {
    points: ['An illegal fishing vessel seized in the Gal\u00e1pagos Marine Reserve carried 379 sharks from seven species.', 'Most of the sharks were juveniles, documenting an enforcement problem within a protected area.'],
    scope: 'Catch documentation from one seized vessel, not an estimate of all illegal fishing in the reserve.',
    source: 'publications/extracted/Carr et al. (Marine Policy) 2013.json: opening abstract',
  },
  '58': {
    points: ['Three juvenile wrasse species formed a consistent competitive hierarchy in the experiment.', 'Their distributions across surveyed reefs were consistent with differences in competitive ability.'],
    scope: 'Experiments and surveys on juvenile wrasses in Mo\u2018orea, not a hierarchy applying to all reef fishes.',
    source: 'publications/extracted/Geange et al. (MEPS) 2013.json: abstract',
  },
  '59': {
    points: ['Large settlement events were followed by dead and dying young surgeonfish with white lesions.', 'The observations raise disease as a possible source of early mortality alongside predation and competition.'],
    scope: 'Observations from two settlement events in Mo\u2018orea; the suspected pathogen was not identified.',
    source: 'publications/extracted/Stier et al. (Pacific Science) 2013.json: opening abstract',
  },
  '60': {
    points: ['Ignoring prey depletion and nonlinear feeding responses can bias estimates of combined predator effects.', 'Accounting for both helps distinguish genuine interactions among predators from artifacts of the experimental calculation.'],
    scope: 'Methodological analysis of multiple-predator experiments.',
    source: 'publications/extracted/McCoy et al. (Ecology Letters) 2012.json: abstract',
  },
  '61': {
    points: ['Coral guard crustaceans reduced tissue loss to seastar predators.', 'Together, the two mutualist species reduced tissue loss more than expected from their independent effects.'],
    scope: 'Factorial defense experiment; the synergistic effect concerned tissue loss, not the frequency of attacks.',
    source: 'publications/extracted/McKeon et al. (Oecologia) 2012.json: abstract',
  },
  '62': {
    points: ['Body size, age, life stage, and growth pattern may help explain differences in appendage regeneration.', 'The review connects those organismal traits with mechanisms operating at tissue, cellular, and genomic levels.'],
    scope: 'Cross-species synthesis proposing links to test, not evidence of one universal regeneration mechanism.',
    source: 'publications/extracted/Seifert et al (Biological Reviews) 2011.json: abstract',
  },
  '63': {
    points: ['Corals with more resident crabs and shrimp removed more sediment in the experiment.', 'The two common symbiont species provided similar per-animal benefits, but hosting both allowed more helpers to coexist.'],
    scope: 'Surveys and mesocosm tests of coral sediment removal; the proposed density constraint concerns competition among symbionts.',
    source: 'publications/extracted/Stier et al (PLoS ONE) 2012.json: abstract',
  },
  '64': {
    points: ['Coastal habitats provide services whose economic value depends on their ecological functions.', 'Connections among habitats matter for services such as coastal protection and fisheries support, but many benefits remain poorly valued.'],
    scope: 'Review of estuarine and coastal ecosystem services, not a single global valuation experiment.',
    source: 'publications/extracted/Barbier et al. (Ecological Monographs) 2011.json: abstract',
  },
  '65': {
    points: ['Excluding coral predators and increasing coral colony density each increased skeletal growth.', 'The predator effect did not depend on coral density within the experiment.'],
    scope: 'Field experiment on massive Porites; the mechanisms behind the density benefit were proposed rather than established.',
    source: 'publications/extracted/Shantz et al. (Coral Reefs) 2011.json: abstract',
  },
  '66': {
    points: ['Crowding can increase or decrease reef-fish mortality depending on behavior, habitat layout, and the scale of observation.', 'The synthesis explains how apparently contradictory density-dependent patterns can arise from different ecological settings.'],
    scope: 'Conceptual review with predictions that still require testing in some settings.',
    source: 'publications/extracted/White et al. (Ecology) 2010_w_appen.json: abstract',
  },
  '67': {
    points: ['Guard crabs reduced the negative effect of vermetid snails on branching-coral growth.', 'The experiment adds protection from snails to the services these coral residents can provide.'],
    scope: 'Field experiment with Trapezia serenei and Pocillopora.',
    source: 'publications/extracted/Stier et al. (Coral Reefs) 2010.json: abstract',
  },
  '68': {
    points: ['Vermetid snails reduced growth and survival in the corals tested.', 'Sensitivity differed among coral species, suggesting that these overlooked snails could influence community composition.'],
    scope: 'Surveys and field manipulations of four coral species in Mo\u2018orea.',
    source: 'publications/extracted/Shima et al (Biology Letters) 2010.json: opening abstract',
  },
  '69': {
    points: ['Late-arriving young wrasses survived less well than fish arriving alongside competitors.', 'Added habitat complexity improved survival for earlier arrivals but did not rescue fish arriving five days late.'],
    scope: 'Factorial field experiment testing competition within a juvenile wrasse species.',
    source: 'publications/extracted/Geange & Stier (Oecologia) 2010.json: abstract',
  },
  '70': {
    points: ['Reefs exposed to predators had fewer young fishes and fewer species than predator-exclusion reefs.', 'Rarefaction indicated that the richness decline was consistent with nonselective removal of individuals.'],
    scope: 'A 54-day recruitment experiment on standardized patch reefs in Mo\u2018orea.',
    source: 'publications/extracted/Heinlein et al. (Coral Reefs) 2010.json: abstract',
  },
  '71': {
    points: ['Adding neighboring reef habitat redirected some settling fish away from existing patches.', 'A recruitment model suggested that reduced crowding at existing patches could be more important than attracting additional colonists.'],
    scope: 'Field settlement experiment followed by a recruitment model; the long-term recruitment benefit is a prediction.',
    source: 'publications/extracted/Stier and Osenberg (Ecology) 2010.json: abstract',
  },
  '72': {
    points: ['Predatory nudibranchs reduced grazing by sea hares in laboratory trials.', 'Cyanobacterial biomass was higher with nudibranchs present, demonstrating an indirect effect across three trophic levels.'],
    scope: 'Laboratory food-chain experiment; it does not establish the cause of reef-wide cyanobacterial blooms.',
    source: 'publications/extracted/Geange and Stier (Coral Reefs) 2010.json: abstract',
  },
  '73': {
    points: ['Young wrasses survived best without competitors, or when they arrived at the same time as competitors.', 'Survival fell as arrival lag and aggression from established competitors increased.'],
    scope: 'Patch-reef experiments manipulating the arrival sequence of two wrasse species.',
    source: 'publications/extracted/Geange and Stier (Ecology) 2009.json: abstract',
  },
  '74': {
    points: ['Repeated clove-oil exposure reduced coral growth and increased bleaching in a dose-dependent response.', 'Using ethanol as a solvent added to the harmful effects in the treatments tested.'],
    scope: 'Six-week experiment on three coral species; repeated exposure is not equivalent to every single-use field application.',
    source: 'publications/extracted/Boyer et al. (JEMBE) 2009.json: opening abstract',
  },
  '75': {
    points: ['Several reef-fish species sheltered among the spines of crown-of-thorns seastars away from the reef.', 'These observations reveal a wider range of habitat use than their usual coral or urchin associations suggest.'],
    scope: 'Natural-history observations in Mo\u2018orea; benefits to fish survival and persistence were not measured.',
    source: 'publications/extracted/Stier et al. (Coral Reefs) 2008.json: opening text',
  },
};
