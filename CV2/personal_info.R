# 2021-03-19  17:16
# Samran      Nijmegen

# function to return personal info as dataframe with ordered details

addLink <- function(link_location, logo) {
  paste0("<a href=\"", link_location, "\">", fontawesome(logo), "</a>")
}

personal_info <- function () {
  
  col1 <- c('Contact details', 
            NA,
            NA)
  
  col2 <- c ('envelope',
             'phone',
             'link')
  
  col3 <- c ('samranasghar@gmail.com',
             '+31(0)616084635',
             'msnavid.com')
  
  col4 <- c ('github',
             'linkedin',
             'orcid')
  
  col5 <- c ('gihub.com/msnavid',
             'linkedin/in/msnavid',
             'orcid.org/0000-0002-2849-874X')
  
  
  ## ---
  
  for (i in 1:length(col2)) {
    col2_tmp <- icons::fontawesome(col2[i])
    col2_tmp <- as.data.frame(do.call(cbind, col2_tmp)) 
  }
  
  for (i in 1:length(col4)) {
    col4[i] <- addLink(col5[i], col4[i])
  }
  
  df <- data.frame(col1, 
                   col2, 
                   col3, 
                   col4,
                   col5,
                   col2_tmp)
  
  # kableExtra::kbl(df)
  
  return (df)
}