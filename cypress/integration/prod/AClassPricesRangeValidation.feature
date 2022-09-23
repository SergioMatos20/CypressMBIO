Feature:Validate A Class models price are between £15,000 and £60,000

  @smoke
  Scenario: Validate A Class models price are between £15,000 and £60,000
  #  Given an anonymous user access the website
  #  When filters by all Hatchbacks models
   # And hovers the A-Class from the list
   # And selects Build your car
  #  And selects Diesel fuel type
  #  Then a screenshot with the filename as "Hatchbacks_A_Class_Diesel_Cars_Screenshot" is taken
   # And the lowest and highest prices are saved in a file as "Hatchbacks_A_Class_Diesel_Cars_LOHI_Prices"
    And the lowest and highest prices are between "£15,000" and "£60,000"



