# Puppet manifest to modify the default SSH configuration file
# enabling passwordless server connections by specifying a private key.

include stdlib

# Update SSH Private Key configuration
file_line { 'SSH Private Key':
  path               => '/etc/ssh/ssh_config',
  line               => '    IdentityFile ~/.ssh/school',
  match              => '^[#]+[\s]*(?i)IdentityFile[\s]+~/.ssh/id_rsa$',
  replace            => true,
  append_on_no_match => true
}

# Explanation of Regex Match:
# ^               - Start of the line
# [#]*            - Any number of hash characters
# [\s]*           - Zero or more white space characters
# (?i)IdentityFile - Case-insensitive match for "IdentityFile"
# [\s]+           - At least one whitespace character
# ~/.ssh/id_rsa   - Path to the SSH private key file to replace
# $               - End of the line

# Update SSH Configuration to Deny Password Authentication
file_line { 'Deny Password Auth':
  path               => '/etc/ssh/ssh_config',
  line               => '    PasswordAuthentication no',
  match              => '^[#]+[\s]*(?i)PasswordAuthentication[\s]+(yes|no)$',
  replace            => true,
  append_on_no_match => true
}

# Explanation of Regex Match:
# ^                           - Start of the line
# [#]*                        - Any number of hash characters
# [\s]*                       - Zero or more white space characters
# (?i)PasswordAuthentication   - Case-insensitive match for "PasswordAuthentication"
# [\s]+                       - At least one whitespace character
# (yes|no)                    - Match for either "yes" or "no"
# $                           - End of the line
