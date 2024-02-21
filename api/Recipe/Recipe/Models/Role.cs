using System;
using System.Collections.Generic;

namespace Recipe.Models
{
    public partial class Role
    {
        public Role()
        {
            UserMasters = new HashSet<UserMaster>();
        }

        public int Roleid { get; set; }
        public string Rolename { get; set; } = null!;

        public virtual ICollection<UserMaster> UserMasters { get; set; }
    }
}
